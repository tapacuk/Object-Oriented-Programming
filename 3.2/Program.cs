using System;

namespace CollectionsLab
{
    public class Program
    {
        public static void Main()
        {
            CollectionsDemo.Run();

            Console.WriteLine("\n\nbinary tree\n");
            BinaryTree<StringData> tree = new BinaryTree<StringData>();
            StringData[] array = {
            new StringData("Hello", 2, true),
            new StringData("World", 1, false),
            new StringData("Something", 3, true),
            new StringData("Text", 1, true),
            new StringData("Uwa", 2, false),
            new StringData("Name", 1, true)
            };

            foreach (var x in array) tree.Insert(x);

            Console.WriteLine("preorder:");
            foreach (var x in tree) Console.WriteLine(x);

            Console.WriteLine("\nencrypting and decrypting");
            var example = new StringData("TestEncrypt1241234", 2, true);

            Console.WriteLine($"original string: {example.Value}");
            string enc = example.Encrypt();

            Console.WriteLine($"encrypted: {enc}");

            example.Value = enc;
            Console.WriteLine($"decrypted: {example.Decrypt()}");
        }
    }

}