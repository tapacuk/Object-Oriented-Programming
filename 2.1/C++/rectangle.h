#ifndef RECTANGLE_H
#define RECTANGLE_H

#include "shapes.h"

class Rectangle : public Shapes {
    public:
        Rectangle();
        Rectangle(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4);
        ~Rectangle() {};

        double getWidth() const;
        double getHeight() const;

        double getArea() const;
        double getPerimeter() const;
};

#endif