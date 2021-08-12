
def intersect_basic(l1, r1, l2, r2):

    if (l1.x == r1.x or l1.y == r1.y or l2.x == r2.x or l2.y == r2.y):
        return False
    if(l1.x >= r2.x or l2.x >= r1.x):
        return False
    if(r1.y >= l2.y or r2.y >= l1.y):
        return False
    return True