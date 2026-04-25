export const languageList = [
  'c++',
  'c',
  'python',
  'java',
  'javascript',
  'typescript',
  'go',
  'kotlin',
  'swift',
  'rust',
  'ruby',
  'php',
  'dart',
  'scala',
];

export const defaultCodeSnippets: Record<string, string> = {
  'c++': `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    cout << "Hello, World!" << endl;

    return 0;
}`,

  c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

  python: `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

  javascript: `const main = () => {
    console.log("Hello, World!");
}

main();`,

  typescript: `function main(): void {
    console.log("Hello, World!");
}

main();`,

  go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

  kotlin: `fun main() {
    println("Hello, World!")
}`,

  swift: `import Foundation

print("Hello, World!")`,

  rust: `fn main() {
    println!("Hello, World!");
}`,

  ruby: `def main
  puts "Hello, World!"
end

main`,

  php: `<?php

function main() {
    echo "Hello, World!\\n";
}

main();`,

  dart: `void main() {
  print("Hello, World!");
}`,

  scala: `object Main {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`,
};
