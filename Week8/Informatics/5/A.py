def min(data):
    s = data[0]
    for num in data:
        if num < s:
            s = num
    return s


a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(min([a, b, c, d]))
