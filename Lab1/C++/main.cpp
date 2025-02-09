#include <iostream>
#include <string>
#include "operations.h"


int main() {
    std::string input;

    std::cout << "enter line: ";
    std::getline(std::cin, input);

    if (!Operations::isValidString(input)) {
        std::cout << "string should contain only lowercased latin chars" << std::endl;
        return 0;
    }

    Operations strng(input);

    std::cout << "length: " << strng.stringLength() << std::endl;
    std::cout << "sorted: " << strng.sortAsc() << std::endl;

    return 0;
}
