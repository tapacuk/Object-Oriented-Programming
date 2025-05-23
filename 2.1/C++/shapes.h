#ifndef SHAPES_H
#define SHAPES_H

class Shapes {
protected:
    double x1, y1, x2, y2, x3, y3, x4, y4;
public:
    Shapes();
    Shapes(double x1, double y1, double x2, double y2, double x3, double y3, double x4, double y4);
    ~Shapes() {};

    double getLength(double ax, double ay, double bx, double by) const;
    void showInfo() const;
};

#endif