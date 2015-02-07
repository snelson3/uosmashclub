cd tiotochallonge
python playerparse.py pm
cd ..
rm app/data/profiles/*
mv tiotochallonge/players/*.json app/data
mv tiotochallonge/players/pm/* app/data/profiles
rm tiotochallonge/tournaments/pm/*
cd tiotochallonge
python tiotochallonge.py tiofiles/pm/1010pm.tio
mv test.json tournaments/pm/1010pm.json
python tiotochallonge.py tiofiles/pm/1024pm.tio
mv test.json tournaments/pm/1024pm.json
