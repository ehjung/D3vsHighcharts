import random

f = open('./highchartsData/boxplotData.csv', 'w')

for i in range(100):
    for j in range(100):
        f.write('{}'.format(random.randint(600, 800)))
        if (j == 99):
          f.write('\n')
        else:
          f.write(',')
