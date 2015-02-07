import json
import os
import sys
import trueskill
from trueskill import Rating,rate_1vs1
import operator

env = trueskill.TrueSkill()#sigma=25/3)#draw_probability=0)


class Player:
	def __init__(self,name):
		global env
		self.name = str(name)
		self.rating = env.Rating()
		self.oldrating = env.expose(self.rating) #used to calculate rating changes during tournaments
		self.matches = []
		self.wins = 0
		self.games = 0
		self.tournaments = []
		self.num_tourneys = 0

def playerDict(player):
	d = dict()
	d['name'] = player.name
	d['rating'] = env.expose(player.rating)
	d['matches'] = player.matches
	d['wins'] = player.wins
	d['games'] = player.games
	d['tournaments'] = player.tournaments
	d['num_tourneys'] = player.num_tourneys
	d['game'] = GAME
	return d

def getPlayer(players,name):
	for player in players:
		#print(player.name, "vs",str(name))
		if player.name == str(name):
			return player
	#print("fuck")

def calc_place(entrants):
	#print(entrants)
	#list of dictionaries
	for i in entrants:
		i['fakewins'] = i['fakewins'] + i['wins']
	newlist = sorted(entrants, key=operator.itemgetter('fakewins'))
	place = 0
	oldwins = len(entrants)*3
	for i in newlist:
		if i['wins'] < oldwins:
			place+=1
			oldwins = i['wins']
			i['place'] = place
		else:
			i['place'] = place
	return newlist


GAME = sys.argv[1]

fplayers = set()
players = []
#get a list of all the players

print("hi")
for fn in os.listdir('tournaments/'+GAME):
	f = open("tournaments/"+GAME+"/"+fn,"r")
	di = json.load(f)
	f.close()
	#print("opened")
	for e in di['Entrants']:
		#print(e)
		P = e
		fplayers.add(P)
		#print("entrant" +P)

for player in fplayers:
	players.append(Player(player))

#make a player profile for each player, list games and games won

#assign each player in the set a trueskill Rating

#I actually have to change this to actually work without wasting stuff
#go by tournament, and for every match bring up the two players
#adjust their ratings, add the tournament info, and maybe add a field to the tournament itself

print("this is a thing that happens?")

for fn in os.listdir('tournaments/'+GAME):
	fo = open("tournaments/"+GAME+"/"+fn,"r")
	di = json.load(fo)
	fo.close()

	entrants = []
	for player in di['Entrants']:
		p = dict()
		p['name'] = player
		p['elochange'] = 0
		p['wins'] = 0
		p['fakewins'] = 0 #not shown, only with byes used to claculate placing
		p['place'] = len(di['Entrants'])
		entrants.append(p)
	#I need a list with each entrant as a dictionary
	#records the following 
	  #name
	  #wins
	  #place
	  #elochange
	print("DATE",str(di['Date']))
	for m in di['Matches']:
		print(str(m['rnd'])+" "+str(m['number']))
		#this should happen in sorted order
		match = dict()
		match['Player1'] = m['Player1']
		match['Player2'] = m['Player2']
		match['winner'] = m['winner']		
		if (str(m['Player1']) == 'BYE') or (str(m['Player2']) == 'BYE'):
			#print("  "+m['Player1'],m['Player2'],"BYE")
			for p in entrants:
				if p['name'] == m['Player1']:
					p['fakewins'] += 1
				elif p['name'] == m['Player2']:
					p['fakewins'] += 1
			pass
		else:
			if di['Date'] not in getPlayer(players,m['Player1']).tournaments:
				getPlayer(players,m['Player1']).tournaments.append(di['Date'])
			if di['Date'] not in getPlayer(players,m['Player2']).tournaments:
				getPlayer(players,m['Player2']).tournaments.append(di['Date'])
			if str(match['winner']) == str(match['Player1']):
				newp1, newp2 = env.rate_1vs1( getPlayer(players,m['Player1']).rating, getPlayer(players,m['Player2']).rating )
				getPlayer(players,m['Player1']).wins+=1
				getPlayer(players,m['Player1']).games+=1
				getPlayer(players,m['Player2']).games+=1
			else:
				newp2, newp1 = env.rate_1vs1( getPlayer(players,m['Player2']).rating, getPlayer(players,m['Player1']).rating )
				getPlayer(players,m['Player2']).wins+=1
				getPlayer(players,m['Player1']).games+=1
				getPlayer(players,m['Player2']).games+=1
			match['P1SkillCH'] = env.expose(newp1) - env.expose(getPlayer(players,m['Player1']).rating)
			match['P2SkillCH'] = env.expose(newp2) - env.expose(getPlayer(players,m['Player2']).rating)
			match['DATE'] = di['Date']
			#print("  "+str(match['Player1']),"v",str(match['Player2']),"w",str(match['winner']))
			#print("   "+str(match['P1SkillCH']),str(match['P2SkillCH']))
			getPlayer(players,m['Player1']).rating = newp1
			getPlayer(players,m['Player2']).rating = newp2
			getPlayer(players,m['Player1']).matches.append(match)
			getPlayer(players,m['Player2']).matches.append(match)
			m['P1SkillCH'] = match['P1SkillCH']
			m['P2SkillCH'] = match['P2SkillCH']
			#change the elo in the entrants array
			for p in entrants:
				if p['name'] == m['Player1']:
					if p['name'] == m['winner']:
						p['wins']+=1
				elif p['name'] == m['Player2']:
					if p['name'] == m['winner']:
						p['wins']+=1
	#print(entrants)
	for p in entrants:
		player = getPlayer(players,p['name'])
		p['elochange'] = env.expose(player.rating) - player.oldrating
		player.oldrating = env.expose(player.rating)
		#if p['elochange'] == 0 and p['wins'] == 0:
		#	entrants.remove(p)

	#calculate the place of each 
	entrants = calc_place(entrants)
	#print(entrants)
	di['Entrants'] = entrants
	di['g'] = GAME
	f = open("tournaments/"+GAME+"/"+fn,"w")
	json.dump(di,f,indent=4)

#make each players json file
for player in players:
	player.num_tourneys = len(player.tournaments)
	#player.game = GAME
	if (player.name == 'BYE' ):
		continue
	if (player.num_tourneys < 2):
		continue
	#print(player.name)
	f = open("players/"+GAME+"/"+GAME+"-"+player.name+".json","w")
	json.dump(playerDict(player),f,indent=4)
	f.close()

'''
for player in players:
	plyer = str(player.name)
	f = open("players/"+GAME+"/"+GAME+"-"+player.name+".json","w")
	won = 0
	ms = []
	thing = {}
	for fn in os.listdir('tournaments/'+GAME):
		fo = open("tournaments/"+GAME+"/"+fn,"r")
		di = json.load(fo)
		fo.close()
		#print(player)
		for m in di['Matches']:
			#print(m)
			#print(str(plyer),str(m['Player1']),str(m['Player2']))
			if str(m['Player1']) == plyer or str(m['Player2']) == plyer:
				#print("well fuck")
				match = dict()
				match['Player1'] = m['Player1']
				match['Player2'] = m['Player2']
				match['winner'] = m['winner']
				if plyer == str(match['winner']):
					won+=1
				#print("match" +str(match)
				ms.append(match)
	print(won)
	thing['matches'] = ms
	thing['wins'] = won
	thing['name'] = str(player.name)
	json.dump(thing,f,indent=4)
	f.close()
'''
	#create a file
	#set games won to 0
	#go through each tournament
		#for each game they played in record
		 #player1
		 #player2
		 #victor
		 #if they won increment games won

# make a playerlist.json file
playerlist = []
ps = {}

sorted_names = []

print(GAME)
for player in players:
	sorted_names.append(player.name)
	#print(env.expose(player.rating),player.name)

sorted_names.sort()
for player in sorted_names:
	print(player)
for player in players:
	power = dict()
	power['name'] = GAME+"-"+player.name
	power['num_tourneys'] = len(player.tournaments)
	#print(power['name'])
	'''h = open("players/"+GAME+"/"+GAME+"-"+player.name+".json","r")
	di = json.load(h)
	h.close()'''
	power['ELO'] = str(env.expose(player.rating))
	power['GAME'] = GAME
	playerlist.append(power)
out = open("players/"+GAME+"-playerlist.json","w")
ps['players'] = playerlist
json.dump(playerlist,out,indent=4)
out.close()



