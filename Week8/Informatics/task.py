n = int(input())
arr = []
cnt = 0
for x in range(n):
    temp = int(input())
    arr.append(temp)

for x in range(1, n):
    if arr[x] > arr[x - 1]:
        cnt += 1

print(cnt)
