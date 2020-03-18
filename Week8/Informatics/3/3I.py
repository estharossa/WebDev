x = int(input())
i = 1
cnt = 0
while i <= x:
    if x % i == 0:
        cnt += 1
    i += 1
print(cnt)
