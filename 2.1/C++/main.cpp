#include <iostream>
#include "Rectangle.h"

int main() {
    Rectangle rectDef;
    Rectangle rectSet(5, 4, 5, 20, 20, 20, 20, 4);

    std::cout << "- first rectangle (by default) -" << std::endl;
    std::cout << "heigth and width: " << rectDef.getHeight() << ", " << rectDef.getWidth() << std::endl;
    std::cout << "area of rectangle: " << rectDef.getArea() << std::endl;
    std::cout << "perimeter of rectangle: " << rectDef.getPerimeter() << '\n' << std::endl;

    std::cout << "- second rectangle -" << std::endl;
    std::cout << "heigth and width: " << rectSet.getHeight() << ", " << rectSet.getWidth() << std::endl;
    std::cout << "area of rectangle: " << rectSet.getArea() << std::endl;
    std::cout << "perimeter of rectangle: " << rectSet.getPerimeter() << '\n' << std::endl;
    
    return 0;
}