#include <iostream>
#include <string>
#include "operations.h"

int main()
{
    std::string input;

    std::cout << "enter line: ";
    std::getline(std::cin, input);

    Operations strng(input);
    
    if (!Operations::isValidString(input)) {
        std::cout << "string should contain only lowercased latin chars" << std::endl;
        return 0;
    }

    if (strng.stringLength() > 0) {
        std::cout << "length: " << strng.stringLength() << std::endl;
        std::cout << "sorted: " << strng.sortAsc() << std::endl;
        std::cout << "line: " << strng.getText() << std::endl;
    } else {
        std::cout << "your string is empty" << std::endl;
    }

    return 0;
}
