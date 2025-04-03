#include "shapes.h"
#include <cmath>
#include <iostream>

Shapes::Shapes() : x1(0), y1(0), x2(0), y2(1), x3(1), y3(1), x4(1), y4(0) {}
Shapes::Shapes(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4) : x1(x1), y1(y1), x2(x2), y2(y2), x3(x3), y3(y3), x4(x4), y4(y4) {}

double Shapes::getLength(double ax, double ay, double bx, double by) const {
    {
        return sqrt(pow(bx - ax, 2) + pow(by - ay, 2));
    }
}
