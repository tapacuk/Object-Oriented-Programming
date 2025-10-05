using System;
using System.Collections;
using System.Collections.Generic;

namespace CollectionsLab
{
    public class CollectionsDemo
    {
        public static void Run()
        {
            StringData[] array = {
            new StringData("Hello", 2, true),
            new StringData("World", 1, false),
            new StringData("CSharp", 3, true),
            new StringData("Tree", 1, true),
            new StringData("Encrypt", 2, false),
            new StringData("Data", 1, true)
            };

            Console.WriteLine("array");
            foreach (var x in array) Console.WriteLine(x);

            List<StringData> list = new List<StringData>(array);
            list.Add(new StringData("Extra", 2, true));
            list.RemoveAt(1);
            list[0] = new StringData("Updated", 3, true);

            Console.WriteLine("\nlist");
            foreach (var x in list) Console.WriteLine(x);

            ArrayList arrList = new ArrayList(array);
            arrList.Add(new StringData("Legacy", 2, true));
            arrList.RemoveAt(0);

            Console.WriteLine("\narrayList");
            foreach (var x in arrList) Console.WriteLine(x);
        }
    }

}