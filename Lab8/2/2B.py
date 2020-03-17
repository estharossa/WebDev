year = int(input())
if year % 400 == 0:
    print("YES")
    exit()
elif year % 4 == 0 and year % 100 != 0:
    print("YES")
    exit()
print("NO")