# odin-knightTravails

take in input for start square and end square
for each move, a knight can move to another square with the following combinations
    up1 right2
    up1 left2
    up2 right1
    up2 left2
    down1 right2
    down1 left2
    down2 right1
    down2 left1
repeat this recursion, stop if it goes <0 or >7 for x/y coord, or if end square is reached

read last node of the tree
if the last node is the end square coordinate, 
    check depth and keep result
    if there is a result and the depth of another route is shorter, update the result

print final result


