import csv
import random

with open('morley.csv', 'w') as csvfile:
	fieldnames = ['Expt', 'Run', 'Speed']
	writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
	writer.writeheader()
	for expt in range(100):
		for i in range(100):
			 writer.writerow({'Expt': expt, 'Run': random.randint(1, 200), 'Speed': random.randint(800, 1000)})
