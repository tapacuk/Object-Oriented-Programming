using System.IO;
using System.Text;

namespace FileLogic
{
    public class FileManager
    {
        // private readonly string filePath = @"..\..\..\Database{}.txt";

        public void EditFile(string[] lines, string name)
        {
            using (FileStream filestream = new FileStream($@"..\..\..\Database{name}.txt", FileMode.Create, FileAccess.Write))
            using (StreamWriter writer = new StreamWriter(filestream, Encoding.UTF8))
            {
                foreach (string line in lines)
                    writer.WriteLine(line);
            }
        }

        public void WriteFile(string[] lines, string name)
        {
            using (FileStream filestream = new FileStream($@"..\..\..\Database{name}.txt", FileMode.Append, FileAccess.Write))
            using (StreamWriter writer = new StreamWriter(filestream, Encoding.UTF8))
            {
                foreach (string line in lines)
                    writer.WriteLine(line);
            }
        }

        public string[] ReadFile(string name)
        {
            using (FileStream filestream = new FileStream($@"..\..\..\Database{name}.txt", FileMode.Open, FileAccess.Read))
            using (StreamReader reader = new StreamReader(filestream, Encoding.UTF8))
            {
                string content = reader.ReadToEnd();
                return content.Split(new[] { '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries);
            }
        }
    }


}