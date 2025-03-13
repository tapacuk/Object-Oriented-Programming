#include <iostream>
#include <string>
#include "stringLines.h"

int main()
{
    std::string inputR2 = "";
    std::string inputR3 = "";

    std::cout << "enter R2 line: ";
    std::getline(std::cin, inputR2);
    std::cout << "enter R3 line: ";
    std::getline(std::cin, inputR3);

    Lines firstLine;
    Lines secondLine(inputR2);
    Lines thirdLine(inputR3);
    
    if (!Lines::isValidString(inputR2)) {
        std::cout << "error in R2 string: should contain only uppercased latin chars" << std::endl;
        return 0;
    }
    if (!Lines::isValidString(inputR3)) {
        std::cout << "error in R3 string: should contain only uppercased latin chars" << std::endl;
        return 0;
    }
 
    secondLine = secondLine / 2;
    firstLine = secondLine + thirdLine;

    if (firstLine.stringLength() > 0) {
        std::cout << "line: " << firstLine.getText() << std::endl;
        std::cout << "length: " << firstLine.stringLength() << std::endl;

    } else {
        std::cout << "your string is empty" << std::endl;
    }

    return 0;
}
