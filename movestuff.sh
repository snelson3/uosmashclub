rm app/data/profiles/*
rm app/data/tournaments/*
mv tiotochallonge/players/*.json app/data
mv tiotochallonge/players/melee/* app/data/profiles
mv tiotochallonge/players/pm/* app/data/profiles
mv tiotochallonge/tournaments/melee/* app/data/tournaments
mv tiotochallonge/tournaments/pm/*	app/data/tournaments
cp tiotochallonge/backuptournaments/melee/* tiotochallonge/tournaments/melee
cp tiotochallonge/backuptournaments/pm/* tiotochallonge/tournaments/pm
#rm tiotochallonge/tournaments/melee/2015*
#rm tiotochallonge/tournaments/pm/2015*
