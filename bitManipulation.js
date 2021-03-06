//Do the following Operations:
//  ADD => 24 + 8
1. convert both numbers to binary
2. add both numbers
3. convert to decimal

24 - 16 = 8
8 - 8 = 0

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0010 0000
decimal = 32

//SUBSTRACTION 24 - 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 0000
decimal = 16

//OR 24 OR 8
0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 1000
decimal = 8 + 16 = 24
x y => x|y
0 0     0
0 1     1
1 0     1
1 1     1

//24 AND 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0000 1000
decimal = 8
x y => x|y
0 0     0
0 1     0
1 0     0
1 1     1

//24 XOR 8
0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 0000
decimal = 16
x y => x|y
0 0     0
0 1     1
1 0     1
1 1     0

//Shift to the Right
24 >> 2
shift to bits the right
0000 0000 0001 1000
-------------------
0000 0000 0000 0110
decimal = 2 + 4 =  6

//shift to the left
24 << 2
shift to bits the left
0000 0000 0001 1000
-------------------
0000 0000 0110 0000
decimal = 32 + 64 =  96

//NOT 24
flip the numbers if starts with 1 it means it as negative numbers
1111 1111 1110 0111

0000 0000 0001 1000
0000 0000 0000 0001
-------------------
0000 0000 0001 1001

decimal = -25
