#include "rectangle.h"
#include <iostream>
#include <cmath>

Rectangle::Rectangle() : Shapes() {}
Rectangle::Rectangle(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4) : Shapes(x1, y1, x2, y2, x3, y3, x4, y4) {}


double Rectangle::getHeight() const {
    return getLength(x1, y1, x2, y2);
}

double Rectangle::getWidth() const {
    return getLength(x2, y2, x3, y3);
}

double Rectangle::getArea() const {
    return getHeight() * getWidth();
}

double Rectangle::getPerimeter() const {
    return (getHeight() + getWidth()) * 2;
}
