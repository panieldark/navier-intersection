

class RectPoint:
    def __init__(self, x, y):
        self.x = x
        self.y = y


def intersect(l1, r1, l2, r2):

    if (l1.x == r1.x or l1.y == r1.y or l2.x == r2.x or l2.y == r2.y):
        return False

    if(l1.x >= r2.x or l2.x >= r1.x):
        return False

    if(r1.y >= l2.y or r2.y >= l1.y):
        return False

    return True


if __name__ == "__main__":
    l1 = RectPoint(1, 2)
    r1 = RectPoint(3, 0)
    l2 = RectPoint(2, 3)
    r2 = RectPoint(4, 1)
    # l1 = RectPoint(0, 10)
    # r1 = RectPoint(10, 0)
    # l2 = RectPoint(5, 5)
    # r2 = RectPoint(15, 0)
    if(intersect(l1, r1, l2, r2)):
        print("intersect")
    else:
        print("no intersection")
