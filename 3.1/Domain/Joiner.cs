namespace Domain
{
    public class Joiner : Person, IJoiner
    {
        public Joiner(string name, string surname, string gender)
        {
            this.name = name;
            this.surname = surname;
            this.gender = gender;
        }

        public void ConstructFurniture()
        {
            Console.WriteLine($"{name} {surname} constructed furniture!");
        }

        public string[] FormatToObj()
        {
            return new string[]
            {
            $"Joiner {name} {surname}",
            $"{{ \"firstname\": \"{name}\",",
            $"\"lastname\": \"{surname}\",",
            $"\"gender\": \"{gender}\"}};"
            };
        }

        public string FormatToText()
        {
            return $"   {name} {surname}, {gender}";
        }
    }
}

