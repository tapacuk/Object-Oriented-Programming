#include "LineContainer.h"
#include <iostream>

int main()
{
    LineContainer line;
    std::string choice;

    while (true)
    {
        std::cout << "- - - menu - - -" << std::endl;
        std::cout 
            << "(1) add line\n"
            << "(2) remove line\n"
            << "(3) clear lines\n"
            << "(4) show all lines\n"
            << "(5) show char frequency in entire text\n"
            << "(6) show shortest line\n"
            << "(7) show first char of each line in a string\n\n"
            << "(0) exit\n";

        std::getline(std::cin, choice);

        switch (std::stoi(choice)) // convert string to int
        {
        case 1:
        {
            std::cout << "enter line to add: ";
            std::string input;
            std::getline(std::cin, input);
            line.AddLine(input);
            break;
        }
        case 2:
        {
            std::cout << "enter line to remove: ";
            std::string input;
            std::getline(std::cin, input);
            line.RemoveLine(input);
            break;
        }
        case 3:
            line.ClearText();
            std::cout << "all lines cleared" << std::endl;
            break;
        case 4:
            std::cout << "your string: " << line.ShowAllLines() << std::endl;
            break;
        case 5:
        {
            std::cout << "enter char to count frequency: ";
            char c;
            std::cin >> c;
            std::cin.ignore();
            std::cout << c << " char frequency: " << line.CharFrequency(c) << std::endl;
            break;
        }
        case 6:
            std::cout << "shortest line: " << line.GetShortestLine() << std::endl;
            break;
        case 7:
            std::cout << "first chars string: " << line.BuildFirstChars() << std::endl;
            break;
        case 0:
            return 0;
        default:
            std::cout << "invalid choice" << std::endl;
            break;
        }
    }

    return 0;
}
