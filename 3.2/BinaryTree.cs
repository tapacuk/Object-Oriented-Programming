using System;
using System.Collections;
using System.Collections.Generic;

namespace CollectionsLab
{
    public class BinaryTreeNode<T>(T data) // вузол
    {
        public T Data = data;
        public BinaryTreeNode<T>? Left, Right;
    }

    public class BinaryTree<T> : IEnumerable<T> where T : IComparable<T>
    {
        private BinaryTreeNode<T>? root;

        public void Insert(T value) => root = InsertRec(root, value);

        private BinaryTreeNode<T> InsertRec(BinaryTreeNode<T> node, T value)
        {
            if (node == null) return new BinaryTreeNode<T>(value);
            if (value.CompareTo(node.Data) < 0)
                node.Left = InsertRec(node.Left, value);
            else
                node.Right = InsertRec(node.Right, value);
            return node;
        }

        private static IEnumerable<T> Preorder(BinaryTreeNode<T> node)
        {
            if (node != null)
            {
                yield return node.Data;
                foreach (var n in Preorder(node.Left))
                    yield return n;
                foreach (var n in Preorder(node.Right))
                    yield return n;
            }
            else
            {
                Console.WriteLine("node is empty");
            }
        }

        public IEnumerator<T> GetEnumerator() => Preorder(root).GetEnumerator();
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}