#pragma once

#include <string>
class Operations {
    private:
        std::string text;
    
    public:
        Operations(std::string input);
    
        std::string getText();
        static bool isValidString(std::string input);
        int stringLength();
        std::string sortAsc();
    };
