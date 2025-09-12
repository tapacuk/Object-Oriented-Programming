namespace Domain
{
    public class Photographer : Person, IPhotographer
    {
        public Photographer(string name, string surname, string gender)
        {
            this.name = name;
            this.surname = surname;
            this.gender = gender;
        }

        public void TakePhoto()
        {
            Console.WriteLine($"{name} {surname} makes some photos!");
        }

        public string[] FormatToObj()
        {
            return new string[]
            {
            $"Photographer {name} {surname}",
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