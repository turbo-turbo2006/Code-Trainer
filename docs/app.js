// Complete lesson data with Level 1 comprehensive content
const appData = {
  platform: {
    name: "CodeTrainer",
    version: "2.0",
    startingLevel: 1,
    maxLevel: 5,
    totalLessons: 60
  },
  
  languages: {
    python: {
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
      totalLessons: 15,
      description: "Learn Python programming from absolute basics to advanced concepts",
      lessons: [
        {
          id: 1,
          title: "What is Programming?",
          level: 1,
          duration: 20,
          xp: 100,
          difficulty: "Beginner",
          description: "Introduction to programming concepts and Python overview",
          objectives: ["Understand what programming is", "Learn about Python", "Run your first program"],
          theory: "Programming is like giving instructions to a computer. Just like you might give directions to a friend, programming involves writing step-by-step instructions that a computer can follow. Python is a programming language - it's a way to communicate with computers using words and symbols that are easier for humans to understand than computer code.\n\nPython is popular because it's designed to be readable and simple. Many companies like Google, Instagram, and Netflix use Python for their websites and applications. In this course, you'll learn to write Python programs that can solve problems, create games, and build useful applications.",
          examples: [
            {
              title: "Your Very First Python Program",
              code: "# This is a comment - it's a note for humans, not the computer\n# The computer ignores anything after the # symbol\n\n# This line tells the computer to display text on the screen\nprint(\"Hello, World!\")\nprint(\"Welcome to programming!\")\nprint(\"This is Python!\")",
              explanation: "The print() function tells Python to display text on the screen. Text that you want to display goes inside quotes. Comments (lines starting with #) are notes for humans and are ignored by the computer."
            },
            {
              title: "Making the Computer Do Math",
              code: "# Python can work like a calculator\nprint(\"Let's do some math!\")\nprint(5 + 3)    # Addition\nprint(10 - 4)   # Subtraction\nprint(6 * 7)    # Multiplication\nprint(15 / 3)   # Division\n\n# You can also print the results with labels\nprint(\"5 plus 3 equals:\", 5 + 3)",
              explanation: "Python can perform mathematical operations. The symbols +, -, *, and / represent addition, subtraction, multiplication, and division. You can combine text and numbers in print statements using commas."
            }
          ],
          exercise: {
            title: "Your Programming Introduction",
            description: "Create a program that introduces you and does some basic math.",
            starterCode: "# Write a program that:\n# 1. Prints a greeting with your name\n# 2. Calculates and displays your age in months (your age × 12)\n# 3. Shows a fun fact about yourself\n\n# Your code here:\n",
            hints: ["Use print() to display text", "Put text in quotes", "Use * to multiply", "You can print multiple things with commas"],
            solution: "# Personal introduction program\nprint(\"Hello! My name is Alex\")\nprint(\"I am 20 years old\")\nprint(\"That means I am\", 20 * 12, \"months old!\")\nprint(\"Fun fact: I love learning programming!\")"
          },
          challenge: {
            title: "Age Calculator",
            description: "Create a program that calculates various time measurements based on age.",
            instructions: "Write a program that takes someone's age and calculates how old they are in different time units (months, weeks, days, hours). Display the results with clear labels.",
            starterCode: "# Age Calculator Challenge\n# Calculate age in different time units\n\nage_in_years = 18  # You can change this number\n\n# Calculate and display:\n# - Age in months\n# - Age in weeks (approximately)\n# - Age in days (approximately)\n# - Age in hours (approximately)\n\n# Your code here:\n",
            solution: "# Age Calculator Challenge Solution\nage_in_years = 18\n\nage_in_months = age_in_years * 12\nage_in_weeks = age_in_years * 52\nage_in_days = age_in_years * 365\nage_in_hours = age_in_days * 24\n\nprint(\"Age Calculator Results:\")\nprint(f\"Age in years: {age_in_years}\")\nprint(f\"Age in months: {age_in_months}\")\nprint(f\"Age in weeks: {age_in_weeks}\")\nprint(f\"Age in days: {age_in_days}\")\nprint(f\"Age in hours: {age_in_hours}\")",
            testCases: ["Should calculate months correctly", "Should show all time units", "Should format output clearly"]
          },
          keyTakeaways: ["Programming is giving step-by-step instructions to computers", "Python is beginner-friendly and widely used", "print() displays output", "Comments help explain code", "Python can perform mathematical calculations"]
        },
        {
          id: 2,
          title: "Variables - Storing Information",
          level: 1,
          duration: 25,
          xp: 150,
          difficulty: "Beginner",
          description: "Learn how to store and use information in your programs",
          objectives: ["Create variables", "Understand different data types", "Use variables in calculations"],
          theory: "Variables are like labeled containers that store information in your computer's memory. Think of them as boxes with name tags - you can put something inside and refer to it by the label later.\n\nIn Python, creating a variable is simple: you write a name, an equals sign, and the value you want to store. For example: name = 'Alice' creates a variable called 'name' that contains the text 'Alice'.\n\nPython has different types of data: numbers (like 42), text (like 'Hello'), and true/false values (like True or False). Python automatically figures out what type of data you're storing.",
          examples: [
            {
              title: "Creating Your First Variables",
              code: "# Creating variables to store different types of information\nname = \"Sarah\"           # Text (called a string)\nage = 16                 # Whole number (called an integer)\nheight = 5.4             # Decimal number (called a float)\nis_student = True        # True or False value (called a boolean)\n\n# Using variables in print statements\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Height:\", height, \"feet\")\nprint(\"Is student:\", is_student)",
              explanation: "Variables can store different types of data: strings (text in quotes), integers (whole numbers), floats (decimal numbers), and booleans (True/False). Once created, you can use variable names in place of their values."
            },
            {
              title: "Variables in Action - A Story",
              code: "# Using variables to create a story\nhero_name = \"Alex\"\nquest_item = \"magic sword\"\nmonsters_defeated = 7\nexperience_points = 1250\nlevel_up = True\n\n# Creating a story with our variables\nprint(f\"{hero_name} found the {quest_item}!\")\nprint(f\"Monsters defeated: {monsters_defeated}\")\nprint(f\"Experience gained: {experience_points} XP\")\nprint(f\"Level up: {level_up}\")\nprint(f\"{hero_name} is now ready for the next adventure!\")",
              explanation: "Variables make your programs flexible. Instead of typing the same values repeatedly, you can change a variable once and it updates everywhere it's used. The f-string format (f\"text {variable}\") is a clean way to mix text and variables."
            }
          ],
          exercise: {
            title: "Personal Information Card",
            description: "Create variables to store personal information and display them in a formatted card.",
            starterCode: "# Create variables for:\n# - Your favorite color\n# - Your favorite number\n# - Your favorite food\n# - Your favorite movie\n# - Whether you like programming (True/False)\n\n# Then display them in a neat format\n\n# Your code here:\n",
            hints: ["Use descriptive variable names", "Text goes in quotes", "Numbers don't need quotes", "Use True/False for yes/no answers", "f-strings help format output nicely"],
            solution: "# Personal Information Card\nfavorite_color = \"blue\"\nfavorite_number = 7\nfavorite_food = \"pizza\"\nfavorite_movie = \"The Matrix\"\nlikes_programming = True\n\nprint(\"=== Personal Information Card ===\")\nprint(f\"Favorite Color: {favorite_color}\")\nprint(f\"Lucky Number: {favorite_number}\")\nprint(f\"Favorite Food: {favorite_food}\")\nprint(f\"Favorite Movie: {favorite_movie}\")\nprint(f\"Enjoys Programming: {likes_programming}\")"
          },
          challenge: {
            title: "Variable Math Adventure",
            description: "Create a program that uses variables to solve a real-world problem with calculations.",
            instructions: "You're planning a pizza party! Create variables for the party details and calculate the total cost and planning information.",
            starterCode: "# Pizza Party Calculator\n# Create variables for:\n# - Number of friends invited\n# - Slices per pizza (usually 8)\n# - Slices each person eats (usually 3)\n# - Cost per pizza\n# - Cost per drink\n\n# Calculate and display:\n# - Total people (including you)\n# - Total slices needed\n# - Number of pizzas to order\n# - Total cost for pizzas\n# - Total cost for drinks\n# - Total party cost\n\n# Your code here:\n",
            solution: "# Pizza Party Calculator Solution\nfriends_invited = 8\nslices_per_pizza = 8\nslices_per_person = 3\ncost_per_pizza = 12.99\ncost_per_drink = 2.50\n\n# Calculations\ntotal_people = friends_invited + 1\ntotal_slices_needed = total_people * slices_per_person\npizzas_to_order = (total_slices_needed + slices_per_pizza - 1) // slices_per_pizza\ntotal_pizza_cost = pizzas_to_order * cost_per_pizza\ntotal_drink_cost = total_people * cost_per_drink\ntotal_cost = total_pizza_cost + total_drink_cost\n\nprint(\"=== Pizza Party Planner ===\")\nprint(f\"Total people: {total_people}\")\nprint(f\"Slices needed: {total_slices_needed}\")\nprint(f\"Pizzas to order: {pizzas_to_order}\")\nprint(f\"Pizza cost: ${total_pizza_cost:.2f}\")\nprint(f\"Drink cost: ${total_drink_cost:.2f}\")\nprint(f\"Total cost: ${total_cost:.2f}\")",
            testCases: ["Should calculate total people correctly", "Should determine pizza quantity needed", "Should calculate costs accurately"]
          },
          keyTakeaways: ["Variables store data with descriptive names", "Python has strings, integers, floats, and booleans", "Variables make programs flexible and reusable", "f-strings help format output nicely", "Good variable names make code readable"]
        },
        {
          id: 3,
          title: "Getting User Input",
          level: 1,
          duration: 30,
          xp: 150,
          difficulty: "Beginner",
          description: "Learn how to make interactive programs that respond to user input",
          objectives: ["Use input() function", "Convert user input to numbers", "Create interactive programs"],
          theory: "Interactive programs are much more interesting than programs that just display the same thing every time. The input() function lets you ask users questions and use their answers in your program.\n\nWhen you use input(), the program pauses and waits for the user to type something and press Enter. Whatever they type becomes text (a string) that your program can use.\n\nSince input() always gives you text, you need to convert it to numbers if you want to do math. Use int() for whole numbers and float() for decimal numbers.",
          examples: [
            {
              title: "Your First Interactive Program",
              code: "# Getting information from the user\nname = input(\"What's your name? \")\nage = input(\"How old are you? \")\nfavorite_color = input(\"What's your favorite color? \")\n\n# Using the information they provided\nprint(\"\\n--- Nice to meet you! ---\")\nprint(f\"Hello, {name}!\")\nprint(f\"You are {age} years old.\")\nprint(f\"I like {favorite_color} too!\")",
              explanation: "The input() function displays a question and waits for the user to respond. The text they type gets stored in your variable. \\n creates a blank line to make output look neater."
            },
            {
              title: "Math with User Input",
              code: "# Getting numbers from users\nprint(\"Let's calculate the area of a rectangle!\")\n\n# Get dimensions as text, then convert to numbers\nlength_text = input(\"Enter the length: \")\nwidth_text = input(\"Enter the width: \")\n\n# Convert text to numbers so we can do math\nlength = float(length_text)\nwidth = float(width_text)\n\n# Calculate and display the area\narea = length * width\nprint(f\"\\nThe area is {area} square units.\")\nprint(f\"A {length} by {width} rectangle has area {area}.\")",
              explanation: "input() always gives you text, even if the user types numbers. Use float() to convert text to decimal numbers, or int() for whole numbers. Then you can do math with the converted values."
            }
          ],
          exercise: {
            title: "Personal Calculator",
            description: "Create an interactive program that asks for two numbers and performs basic math operations.",
            starterCode: "# Personal Calculator\n# Ask the user for two numbers\n# Show the results of adding, subtracting, multiplying, and dividing them\n\nprint(\"Welcome to your personal calculator!\")\n\n# Get the numbers from the user\n# Remember to convert them from text to numbers!\n\n# Your code here:\n",
            hints: ["Use input() to ask for numbers", "Convert input to float() for decimal numbers", "Use descriptive prompts", "Display results with clear labels"],
            solution: "# Personal Calculator Solution\nprint(\"Welcome to your personal calculator!\")\n\n# Get numbers from user\nnum1 = float(input(\"Enter the first number: \"))\nnum2 = float(input(\"Enter the second number: \"))\n\n# Perform calculations\naddition = num1 + num2\nsubtraction = num1 - num2\nmultiplication = num1 * num2\ndivision = num1 / num2\n\n# Display results\nprint(f\"\\n--- Results ---\")\nprint(f\"{num1} + {num2} = {addition}\")\nprint(f\"{num1} - {num2} = {subtraction}\")\nprint(f\"{num1} × {num2} = {multiplication}\")\nprint(f\"{num1} ÷ {num2} = {division}\")"
          },
          challenge: {
            title: "Interactive Story Generator",
            description: "Create a program that asks users for various inputs and creates a custom story.",
            instructions: "Build a Mad Libs style program that asks for different types of words and creates a funny story using their responses.",
            starterCode: "# Interactive Story Generator\n# Ask the user for various words to create a custom story\n\nprint(\"Let's create a story together!\")\nprint(\"I'll ask you for some words, and then create a story using them.\\n\")\n\n# Ask for different types of words\n# Examples: name, adjective, noun, verb, place, number, etc.\n\n# Your code here:\n",
            solution: "# Interactive Story Generator Solution\nprint(\"Let's create a story together!\")\nprint(\"I'll ask you for some words, and then create a story using them.\\n\")\n\n# Collect story elements\nhero_name = input(\"Enter a hero's name: \")\nadjective1 = input(\"Enter an adjective (describing word): \")\nanimal = input(\"Enter an animal: \")\nverb = input(\"Enter an action verb: \")\nplace = input(\"Enter a place: \")\nnumber = input(\"Enter a number: \")\nadjective2 = input(\"Enter another adjective: \")\nobject_name = input(\"Enter an object: \")\n\n# Create the story\nprint(f\"\\n--- Your Custom Story ---\")\nprint(f\"Once upon a time, {hero_name} was walking through the {adjective1} forest.\")\nprint(f\"Suddenly, a {animal} appeared and began to {verb}!\")\nprint(f\"{hero_name} ran all the way to {place} in just {number} seconds.\")\nprint(f\"There, they found a {adjective2} {object_name} that saved the day.\")\nprint(f\"And they all lived happily ever after!\")\n\nprint(f\"\\nThanks for creating this story, it was {adjective1}!\")",
            testCases: ["Should ask for multiple inputs", "Should incorporate all inputs into story", "Should create coherent narrative"]
          },
          keyTakeaways: ["input() makes programs interactive", "input() always returns text strings", "Use int() or float() to convert text to numbers", "Interactive programs are more engaging", "Clear prompts help users understand what to enter"]
        }
      ]
    },
    
    java: {
      name: "Java",
      icon: "☕",
      color: "#ED8B00",
      totalLessons: 15,
      description: "Master Java programming from fundamentals to object-oriented programming",
      lessons: [
        {
          id: 1,
          title: "Java Fundamentals",
          level: 1,
          duration: 30,
          xp: 100,
          difficulty: "Beginner",
          description: "Learn what Java is and write your first Java program",
          objectives: ["Understand Java basics", "Write Hello World program", "Learn about compilation"],
          theory: "Java is one of the world's most popular programming languages. It was created by Sun Microsystems (now Oracle) and is used to build everything from mobile apps (Android) to large enterprise systems.\n\nJava programs are compiled into bytecode that runs on the Java Virtual Machine (JVM). This makes Java programs portable - they can run on any computer with a JVM installed.\n\nEvery Java program must have at least one class, and the main method is where program execution begins.",
          examples: [
            {
              title: "Your First Java Program",
              code: "// This is your first Java program!\n// Every Java program needs a class\npublic class HelloWorld {\n    // This is where the program starts running\n    public static void main(String[] args) {\n        // Print text to the console\n        System.out.println(\"Hello, World!\");\n        System.out.println(\"Welcome to Java programming!\");\n        System.out.println(\"This is going to be fun!\");\n    }\n}",
              explanation: "Every Java program must be inside a class. The main method is where execution begins. System.out.println() prints text to the console. Notice how Java uses curly braces {} to group code and semicolons ; to end statements."
            }
          ],
          exercise: {
            title: "Personal Introduction",
            description: "Create a Java program that introduces yourself.",
            starterCode: "public class Introduction {\n    public static void main(String[] args) {\n        // Write code that prints:\n        // - Your name\n        // - Your age or grade\n        // - Your favorite hobby\n        // - Why you want to learn programming\n        \n    }\n}",
            hints: ["Use System.out.println() to print text", "Text goes in double quotes", "End each statement with a semicolon", "Each line should introduce something about you"],
            solution: "public class Introduction {\n    public static void main(String[] args) {\n        System.out.println(\"Hi! My name is Alex.\");\n        System.out.println(\"I am 16 years old.\");\n        System.out.println(\"My favorite hobby is playing guitar.\");\n        System.out.println(\"I want to learn programming to create cool apps!\");\n    }\n}"
          },
          challenge: {
            title: "Java Program Structure",
            description: "Create a Java program that demonstrates basic program structure and formatting.",
            instructions: "Write a Java program that displays information about Java programming with proper comments and formatting.",
            starterCode: "// Your Java program here\npublic class JavaInfo {\n    public static void main(String[] args) {\n        // Add code that displays:\n        // - What Java is used for\n        // - Why Java is popular\n        // - Your goal in learning Java\n        \n    }\n}",
            solution: "// Java Information Program\npublic class JavaInfo {\n    public static void main(String[] args) {\n        // Display information about Java\n        System.out.println(\"=== Java Programming Language ===\");\n        System.out.println(\"Java is used for:\");\n        System.out.println(\"- Mobile apps (Android)\");\n        System.out.println(\"- Web applications\");\n        System.out.println(\"- Enterprise systems\");\n        System.out.println();\n        System.out.println(\"Java is popular because:\");\n        System.out.println(\"- Write once, run anywhere\");\n        System.out.println(\"- Object-oriented programming\");\n        System.out.println(\"- Large community support\");\n        System.out.println();\n        System.out.println(\"My goal: Build amazing applications with Java!\");\n    }\n}",
            testCases: ["Should compile without errors", "Should display formatted output", "Should use proper Java syntax"]
          },
          keyTakeaways: ["Java programs must have a class and main method", "System.out.println() prints text to console", "Java is compiled to bytecode for portability", "Proper formatting makes code readable", "Comments help explain what code does"]
        }
      ]
    },
    
    c: {
      name: "C",
      icon: "🔵",
      color: "#A8B9CC",
      totalLessons: 15,
      description: "Learn C programming from basics to advanced memory management",
      lessons: [
        {
          id: 1,
          title: "Introduction to C",
          level: 1,
          duration: 25,
          xp: 100,
          difficulty: "Beginner",
          description: "Learn about C programming and write your first C program",
          objectives: ["Understand C language basics", "Write Hello World in C", "Learn about compilation"],
          theory: "C is one of the most influential programming languages ever created. Developed in the 1970s, it's still widely used today for system programming, embedded systems, and building other programming languages.\n\nC programs are compiled directly to machine code, making them very fast. The language is minimal but powerful - it gives you direct control over memory and hardware.\n\nEvery C program needs a main() function where execution begins, and you typically need to include header files for library functions.",
          examples: [
            {
              title: "Your First C Program",
              code: "#include <stdio.h>  // Include standard input/output library\n\n// Every C program needs a main function\nint main() {\n    // printf prints text to the screen\n    printf(\"Hello, World!\\n\");\n    printf(\"Welcome to C programming!\\n\");\n    printf(\"C is powerful and fast!\\n\");\n    \n    return 0;  // Return 0 to indicate success\n}",
              explanation: "#include <stdio.h> gives us access to printf(). The main() function is where your program starts. printf() prints text, and \\n creates a new line. return 0 tells the system the program finished successfully."
            }
          ],
          exercise: {
            title: "C Programming Introduction",
            description: "Create a C program that displays information about yourself and C programming.",
            starterCode: "#include <stdio.h>\n\nint main() {\n    // Write code that prints:\n    // - A greeting with your name\n    // - One thing you find interesting about C\n    // - What you hope to build with C\n    \n    return 0;\n}",
            hints: ["Use printf() to print text", "Include \\n for new lines", "Text goes in double quotes", "Don't forget the semicolon and return 0"],
            solution: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello! I'm learning C programming.\\n\");\n    printf(\"C is interesting because it's so close to the hardware.\\n\");\n    printf(\"I hope to build system software and games with C!\\n\");\n    \n    return 0;\n}"
          },
          challenge: {
            title: "C Program Structure",
            description: "Create a well-structured C program with proper formatting and comments.",
            instructions: "Write a C program that demonstrates good programming practices with comments, formatting, and meaningful output.",
            starterCode: "// Add the necessary include statement\n// Write your C program here\n\n// Your code:\n",
            solution: "// C Programming Demonstration\n// This program shows basic C structure and formatting\n\n#include <stdio.h>\n\nint main() {\n    // Program header\n    printf(\"==============================\\n\");\n    printf(\"    C Programming Demo\\n\");\n    printf(\"==============================\\n\\n\");\n    \n    // Program information\n    printf(\"Language: C\\n\");\n    printf(\"Created: 1970s\\n\");\n    printf(\"Used for: System programming\\n\\n\");\n    \n    // Personal goal\n    printf(\"Goal: Master C programming!\\n\");\n    \n    return 0;\n}",
            testCases: ["Should include proper header files", "Should compile and run correctly", "Should demonstrate good formatting"]
          },
          keyTakeaways: ["C programs need #include statements for libraries", "main() function is the entry point", "printf() displays text output", "return 0 indicates successful execution", "Good formatting and comments improve readability"]
        }
      ]
    },
    
    cpp: {
      name: "C++",
      icon: "➕",
      color: "#00599C",
      totalLessons: 15,
      description: "Master C++ from basic syntax to advanced object-oriented programming",
      lessons: [
        {
          id: 1,
          title: "C++ Basics",
          level: 1,
          duration: 35,
          xp: 100,
          difficulty: "Beginner",
          description: "Introduction to C++ and your first C++ program",
          objectives: ["Learn C++ vs C differences", "Use cout and cin", "Understand namespaces"],
          theory: "C++ was created as an extension of C, adding object-oriented programming features while maintaining C's efficiency. C++ is used for everything from game engines to web browsers to operating systems.\n\nThe main differences from C include: using iostream instead of stdio.h, cout/cin instead of printf/scanf, and the std namespace for standard library functions.\n\nC++ gives you both low-level control and high-level features like classes and objects.",
          examples: [
            {
              title: "Your First C++ Program",
              code: "#include <iostream>  // C++ input/output library\nusing namespace std;  // Use standard namespace\n\nint main() {\n    // cout is used for output in C++\n    cout << \"Hello, World!\" << endl;\n    cout << \"Welcome to C++ programming!\" << endl;\n    cout << \"C++ is object-oriented and powerful!\" << endl;\n    \n    return 0;\n}",
              explanation: "#include <iostream> gives us cout and cin. 'using namespace std' lets us write cout instead of std::cout. The << operator sends data to cout, and endl creates a new line."
            }
          ],
          exercise: {
            title: "C++ Introduction",
            description: "Create a C++ program that introduces you to C++ programming.",
            starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write code using cout that displays:\n    // - Your name and that you're learning C++\n    // - One advantage of C++ over other languages\n    // - What type of programs you want to create\n    \n    return 0;\n}",
            hints: ["Use cout << for output", "Use endl or \\n for new lines", "Chain multiple << operators", "Don't forget return 0"],
            solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hi, I'm Alex and I'm learning C++!\" << endl;\n    cout << \"C++ is great because it combines speed with powerful features.\" << endl;\n    cout << \"I want to create games and system applications.\" << endl;\n    \n    return 0;\n}"
          },
          challenge: {
            title: "C++ Features Overview",
            description: "Create a C++ program that showcases the language's key features and capabilities.",
            instructions: "Write a C++ program that demonstrates different output techniques and provides information about C++ programming.",
            starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Create a program that shows:\n    // - C++ language features\n    // - What makes C++ special\n    // - Your learning objectives\n    \n    return 0;\n}",
            solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Program header with formatting\n    cout << \"********************************\" << endl;\n    cout << \"*      C++ Programming         *\" << endl;\n    cout << \"********************************\" << endl;\n    cout << endl;\n    \n    // C++ features\n    cout << \"C++ Key Features:\" << endl;\n    cout << \"• Object-Oriented Programming\" << endl;\n    cout << \"• Low-level control\" << endl;\n    cout << \"• High performance\" << endl;\n    cout << \"• Rich standard library\" << endl;\n    cout << endl;\n    \n    // Learning goal\n    cout << \"My Goal: \" << \"Master C++ for system programming!\" << endl;\n    \n    return 0;\n}",
            testCases: ["Should use iostream library", "Should demonstrate cout usage", "Should show proper C++ formatting"]
          },
          keyTakeaways: ["C++ extends C with object-oriented features", "iostream provides input/output functionality", "cout << is used for output", "namespace std contains standard library", "endl creates new lines and flushes output"]
        }
      ]
    }
  },

  achievements: [
    {id: "first_lesson", name: "Getting Started", description: "Complete your first lesson", xp: 50, icon: "🎯"},
    {id: "first_challenge", name: "Problem Solver", description: "Complete your first challenge", xp: 100, icon: "⚡"},
    {id: "five_lessons", name: "Dedicated Learner", description: "Complete 5 lessons", xp: 200, icon: "📚"},
    {id: "level_complete", name: "Level Master", description: "Complete all lessons in a level", xp: 500, icon: "👑"},
    {id: "multi_language", name: "Polyglot", description: "Start lessons in 3 different languages", xp: 300, icon: "🌍"},
    {id: "week_streak", name: "Week Warrior", description: "Practice for 7 days straight", xp: 250, icon: "🔥"}
  ]
};

// Application state
let userProgress = {
  currentLevel: 1,
  totalXP: 0,
  streak: 0,
  lessonsCompleted: 0,
  currentLanguage: null,
  languageProgress: {
    python: {currentLesson: 1, xp: 0, completedLessons: []},
    java: {currentLesson: 1, xp: 0, completedLessons: []},
    c: {currentLesson: 1, xp: 0, completedLessons: []},
    cpp: {currentLesson: 1, xp: 0, completedLessons: []}
  },
  achievementsUnlocked: [],
  settings: {
    theme: 'dark',
    fontSize: 14,
    autoSave: true,
    showHints: true,
    playgroundMode: true
  }
};

let currentView = 'dashboard';
let currentLanguage = null;
let currentLesson = null;
let currentSection = 'theory';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  loadProgress();
  initializeApp();
  setupEventListeners();
  updateUI();
});

function initializeApp() {
  showView('dashboard');
  updateProgressBars();
  populateAllLessons();
  renderAchievements();
  applySettings();
}

function setupEventListeners() {
  // Navigation items - fixed to handle both sidebar nav and dashboard language cards
  document.addEventListener('click', function(event) {
    // Handle sidebar navigation
    if (event.target.closest('.nav-item')) {
      event.preventDefault();
      const navItem = event.target.closest('.nav-item');
      const viewName = navItem.dataset.view;
      const language = navItem.dataset.language;

      // Update active nav item
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
      navItem.classList.add('active');

      if (language) {
        currentLanguage = language;
        showView(viewName);
      } else {
        showView(viewName);
      }
    }

    // Handle dashboard progress cards
    if (event.target.closest('.progress-card')) {
      event.preventDefault();
      const card = event.target.closest('.progress-card');
      const language = card.dataset.language;
      if (language) {
        currentLanguage = language;
        showView(`${language}-lessons`);
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const navItem = document.querySelector(`[data-view="${language}-lessons"]`);
        if (navItem) navItem.classList.add('active');
      }
    }

    // Handle lesson cards
    if (event.target.closest('.lesson-card:not(.locked)')) {
      event.preventDefault();
      const card = event.target.closest('.lesson-card');
      const lessonId = parseInt(card.dataset.lessonId);
      const language = card.closest('.lessons-grid').dataset.language;
      if (language && lessonId) {
        showLessonDetail(language, lessonId);
      }
    }

    // Handle back button
    if (event.target.closest('.back-button')) {
      event.preventDefault();
      if (currentLanguage) {
        showView(`${currentLanguage}-lessons`);
      } else {
        showView('dashboard');
      }
    }

    // Handle section navigation
    if (event.target.closest('.section-link')) {
      event.preventDefault();
      const link = event.target.closest('.section-link');
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);
    }

    // Handle lesson buttons
    if (event.target.closest('.complete-lesson-btn')) {
      event.preventDefault();
      completeLesson();
    }

    if (event.target.closest('.next-lesson-btn')) {
      event.preventDefault();
      nextLesson();
    }

    if (event.target.closest('.prev-lesson-btn')) {
      event.preventDefault();
      prevLesson();
    }

    // Handle code editor buttons
    if (event.target.closest('.run-code-btn')) {
      event.preventDefault();
      runExercise();
    }

    if (event.target.closest('.run-challenge-btn')) {
      event.preventDefault();
      runChallenge();
    }

    if (event.target.closest('.show-solution-btn')) {
      event.preventDefault();
      showSolution();
    }

    // Handle hint button
    if (event.target.closest('.hint-button')) {
      event.preventDefault();
      toggleHints();
    }

    // Handle continue button
    if (event.target.closest('#continue-btn')) {
      event.preventDefault();
      document.querySelector('.progress-grid').scrollIntoView({ behavior: 'smooth' });
    }
  });

  setupSettingsListeners();
}

function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });

  // Show selected view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewName;
  }
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  const targetSection = document.getElementById(`${sectionId}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
  }

  // Update active section link
  document.querySelectorAll('.section-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function populateAllLessons() {
  Object.keys(appData.languages).forEach(langKey => {
    populateLessonsForLanguage(langKey);
  });
}

function populateLessonsForLanguage(languageKey) {
  const lessonsGrid = document.querySelector(`.lessons-grid[data-language="${languageKey}"]`);
  if (!lessonsGrid) return;

  const language = appData.languages[languageKey];
  const progress = userProgress.languageProgress[languageKey];
  let html = '';

  // Generate all 15 lessons for Level 1
  for (let i = 1; i <= 15; i++) {
    const lesson = language.lessons.find(l => l.id === i);
    const isCompleted = progress.completedLessons.includes(i);
    const isCurrent = i === progress.currentLesson && !isCompleted;
    const isLocked = i > progress.currentLesson;

    // Use provided lesson data or generate placeholder
    const title = lesson ? lesson.title : `Lesson ${i} - Advanced Topics`;
    const difficulty = lesson ? lesson.difficulty : (i <= 5 ? "Beginner" : i <= 10 ? "Intermediate" : "Advanced");
    const duration = lesson ? lesson.duration : (20 + i * 2);
    const xp = lesson ? lesson.xp : (100 + i * 10);
    const description = lesson ? lesson.description : `Advanced programming concepts - coming soon!`;

    let statusIcon = '⭕';
    let cardClass = 'lesson-card';
    
    if (isCompleted) {
      statusIcon = '✅';
      cardClass += ' completed';
    } else if (isCurrent) {
      statusIcon = '🎯';
      cardClass += ' current';
    } else if (isLocked) {
      statusIcon = '🔒';
      cardClass += ' locked';
    }

    html += `
      <div class="${cardClass}" data-lesson-id="${i}">
        <div class="lesson-status">${statusIcon}</div>
        <div class="lesson-title">${title}</div>
        <div class="lesson-meta">
          <span class="lesson-difficulty">${difficulty}</span>
          <span class="lesson-duration">${duration} min</span>
          <span class="lesson-xp">${xp} XP</span>
        </div>
        <div class="lesson-description">${description}</div>
      </div>
    `;
  }

  lessonsGrid.innerHTML = html;
}

function showLessonDetail(languageKey, lessonId) {
  currentLanguage = languageKey;
  currentLesson = lessonId;

  const language = appData.languages[languageKey];
  const lesson = language.lessons.find(l => l.id === lessonId);

  if (!lesson) {
    // Show placeholder for lessons not yet implemented
    alert('This lesson is coming soon! Complete the available lessons first.');
    return;
  }

  // Update lesson header
  document.getElementById('lesson-title').textContent = lesson.title;
  document.querySelector('.lesson-difficulty').textContent = lesson.difficulty;
  document.querySelector('.lesson-duration').textContent = `${lesson.duration} min`;
  document.querySelector('.lesson-xp').textContent = `${lesson.xp} XP`;

  // Update objectives
  const objectivesList = document.getElementById('lesson-objectives-list');
  if (objectivesList) {
    objectivesList.innerHTML = lesson.objectives.map(obj => `<li>${obj}</li>`).join('');
  }

  // Update theory content
  const theoryContent = document.getElementById('theory-content');
  if (theoryContent) {
    theoryContent.innerHTML = `<p>${lesson.theory.replace(/\n\n/g, '</p><p>')}</p>`;
  }

  // Update examples
  const examplesContainer = document.getElementById('examples-container');
  if (examplesContainer) {
    examplesContainer.innerHTML = generateExamplesHTML(lesson.examples);
  }

  // Update exercise
  if (lesson.exercise) {
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseDesc = document.getElementById('exercise-desc');
    const exerciseEditor = document.getElementById('exercise-editor');
    const hintsContent = document.getElementById('exercise-hints');

    if (exerciseTitle) exerciseTitle.textContent = lesson.exercise.title;
    if (exerciseDesc) exerciseDesc.textContent = lesson.exercise.description;
    if (exerciseEditor) exerciseEditor.value = lesson.exercise.starterCode;
    if (hintsContent) {
      hintsContent.innerHTML = `<ul>${lesson.exercise.hints.map(hint => `<li>${hint}</li>`).join('')}</ul>`;
    }
  }

  // Update challenge
  if (lesson.challenge) {
    const challengeTitle = document.getElementById('challenge-title');
    const challengeDesc = document.getElementById('challenge-desc');
    const challengeInstructions = document.getElementById('challenge-instructions');
    const challengeEditor = document.getElementById('challenge-editor');
    const challengeExpectedOutput = document.getElementById('challenge-expected-output');

    if (challengeTitle) challengeTitle.textContent = lesson.challenge.title;
    if (challengeDesc) challengeDesc.textContent = lesson.challenge.description;
    if (challengeInstructions) challengeInstructions.innerHTML = `<p><strong>Instructions:</strong> ${lesson.challenge.instructions}</p>`;
    if (challengeEditor) challengeEditor.value = lesson.challenge.starterCode;
    if (challengeExpectedOutput) challengeExpectedOutput.textContent = "Run your solution to see expected output";
  }

  // Update key takeaways
  const keyTakeawaysList = document.getElementById('key-takeaways-list');
  if (keyTakeawaysList) {
    keyTakeawaysList.innerHTML = lesson.keyTakeaways.map(takeaway => `<li>${takeaway}</li>`).join('');
  }

  // Update navigation buttons
  updateLessonNavigationButtons();

  // Show lesson detail view
  showView('lesson-detail');
  showSection('theory');
}

function generateExamplesHTML(examples) {
  return examples.map(example => `
    <div class="example-container">
      <h3>${example.title}</h3>
      <div class="example-code">
        <pre><code>${example.code}</code></pre>
      </div>
      <div class="example-explanation">
        <p>${example.explanation}</p>
      </div>
      <div class="example-actions">
        <button class="btn btn--outline btn--sm">Try This Code</button>
      </div>
    </div>
  `).join('');
}

function updateLessonNavigationButtons() {
  const prevBtn = document.querySelector('.prev-lesson-btn');
  const nextBtn = document.querySelector('.next-lesson-btn');

  if (prevBtn) {
    prevBtn.style.display = currentLesson > 1 ? 'block' : 'none';
  }
  
  if (nextBtn) {
    const progress = userProgress.languageProgress[currentLanguage];
    const canGoNext = currentLesson < 15 && progress.completedLessons.includes(currentLesson);
    nextBtn.style.display = canGoNext ? 'block' : 'none';
  }
}

function runExercise() {
  const code = document.getElementById('exercise-editor').value;
  const output = document.getElementById('exercise-output');
  
  if (output) {
    output.textContent = `Executing your code...\n\n// Simulated output:\n// Your code would run here in a real environment\n// Code length: ${code.length} characters`;
    
    setTimeout(() => {
      output.textContent += `\n\nGreat job! Your code has been executed.`;
    }, 1000);
  }
}

function runChallenge() {
  const code = document.getElementById('challenge-editor').value;
  const actualOutput = document.getElementById('challenge-actual-output');
  
  if (actualOutput) {
    actualOutput.textContent = `Running your solution...\n\n// Your output will appear here\n// Code characters: ${code.length}`;
    
    setTimeout(() => {
      actualOutput.textContent = `Solution executed!\n\nCode looks good! In a real environment,\nthis would compile and run your program.`;
    }, 1000);
  }
}

function showSolution() {
  const language = appData.languages[currentLanguage];
  const lesson = language.lessons.find(l => l.id === currentLesson);
  
  if (lesson && lesson.challenge && lesson.challenge.solution) {
    const challengeEditor = document.getElementById('challenge-editor');
    const challengeExpectedOutput = document.getElementById('challenge-expected-output');
    
    if (challengeEditor) challengeEditor.value = lesson.challenge.solution;
    if (challengeExpectedOutput) {
      challengeExpectedOutput.textContent = "Solution loaded! This is one possible solution to the challenge.";
    }
  }
}

function toggleHints() {
  const hintsContent = document.getElementById('exercise-hints');
  const hintButton = document.querySelector('.hint-button');
  
  if (hintsContent && hintButton) {
    if (hintsContent.classList.contains('hidden')) {
      hintsContent.classList.remove('hidden');
      hintButton.textContent = '🔍 Hide Hints';
    } else {
      hintsContent.classList.add('hidden');
      hintButton.textContent = '💡 Show Hint';
    }
  }
}

function completeLesson() {
  if (!currentLanguage || !currentLesson) return;

  const progress = userProgress.languageProgress[currentLanguage];
  
  if (!progress.completedLessons.includes(currentLesson)) {
    // Mark lesson as completed
    progress.completedLessons.push(currentLesson);
    progress.completedLessons.sort((a, b) => a - b);
    
    // Award XP
    const lesson = appData.languages[currentLanguage].lessons.find(l => l.id === currentLesson);
    const xpGained = lesson ? lesson.xp : 100;
    
    progress.xp += xpGained;
    userProgress.totalXP += xpGained;
    userProgress.lessonsCompleted++;
    
    // Update current lesson
    if (currentLesson === progress.currentLesson) {
      progress.currentLesson = Math.min(currentLesson + 1, 15);
    }
    
    // Check for achievements
    checkAchievements();
    
    // Save progress
    saveProgress();
    
    // Update UI
    updateUI();
    populateLessonsForLanguage(currentLanguage);
    
    // Show success message
    alert(`🎉 Lesson completed! You earned ${xpGained} XP!`);
    
    // Auto-advance to next lesson or back to lessons
    if (currentLesson < 15) {
      setTimeout(() => {
        if (confirm('Great job! Would you like to continue to the next lesson?')) {
          showLessonDetail(currentLanguage, currentLesson + 1);
        } else {
          showView(`${currentLanguage}-lessons`);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        alert('🏆 Congratulations! You have completed all Level 1 lessons!');
        showView(`${currentLanguage}-lessons`);
      }, 1000);
    }
  }
}

function nextLesson() {
  if (currentLesson < 15) {
    const progress = userProgress.languageProgress[currentLanguage];
    if (progress.completedLessons.includes(currentLesson)) {
      showLessonDetail(currentLanguage, currentLesson + 1);
    }
  }
}

function prevLesson() {
  if (currentLesson > 1) {
    showLessonDetail(currentLanguage, currentLesson - 1);
  }
}

function checkAchievements() {
  const newAchievements = [];
  
  // Check first lesson
  if (userProgress.lessonsCompleted === 1 && !userProgress.achievementsUnlocked.includes('first_lesson')) {
    newAchievements.push('first_lesson');
  }
  
  // Check five lessons
  if (userProgress.lessonsCompleted >= 5 && !userProgress.achievementsUnlocked.includes('five_lessons')) {
    newAchievements.push('five_lessons');
  }
  
  // Check multi-language
  const languagesStarted = Object.values(userProgress.languageProgress)
    .filter(progress => progress.completedLessons.length > 0).length;
  
  if (languagesStarted >= 3 && !userProgress.achievementsUnlocked.includes('multi_language')) {
    newAchievements.push('multi_language');
  }
  
  // Add new achievements
  newAchievements.forEach(achievementId => {
    userProgress.achievementsUnlocked.push(achievementId);
    const achievement = appData.achievements.find(a => a.id === achievementId);
    if (achievement) {
      userProgress.totalXP += achievement.xp;
      setTimeout(() => {
        alert(`🏆 Achievement Unlocked: ${achievement.name}!\n${achievement.description}\n+${achievement.xp} XP`);
      }, 500);
    }
  });
}

function updateUI() {
  // Update XP displays
  const totalXPElements = [
    document.getElementById('total-xp'),
    document.getElementById('dashboard-xp')
  ];
  totalXPElements.forEach(el => {
    if (el) el.textContent = userProgress.totalXP;
  });
  
  // Update streak
  const streakElements = [
    document.getElementById('current-streak'),
    document.getElementById('dashboard-streak')
  ];
  streakElements.forEach(el => {
    if (el) el.textContent = userProgress.streak;
  });
  
  // Update lessons completed
  const lessonsElement = document.getElementById('dashboard-lessons');
  if (lessonsElement) lessonsElement.textContent = userProgress.lessonsCompleted;
  
  // Update challenges (approximate from completed lessons)
  const challengesElement = document.getElementById('dashboard-challenges');
  if (challengesElement) challengesElement.textContent = Math.floor(userProgress.lessonsCompleted * 0.8);
  
  // Update lesson counters in navigation
  Object.keys(appData.languages).forEach(langKey => {
    const progress = userProgress.languageProgress[langKey];
    const counter = document.querySelector(`[data-language="${langKey}"] .lessons-counter`);
    if (counter) {
      counter.textContent = `${progress.completedLessons.length}/15`;
    }
  });
  
  updateProgressBars();
}

function updateProgressBars() {
  Object.keys(appData.languages).forEach(langKey => {
    const progress = userProgress.languageProgress[langKey];
    const progressFill = document.querySelector(`[data-language="${langKey}"] .progress-fill`);
    if (progressFill) {
      const percentage = (progress.completedLessons.length / 15) * 100;
      progressFill.style.width = `${percentage}%`;
      progressFill.setAttribute('data-progress', percentage);
    }
    
    // Update progress stats
    const progressStats = document.querySelector(`[data-language="${langKey}"] .progress-stats`);
    if (progressStats) {
      const lessonsSpan = progressStats.querySelector('span:first-child');
      const xpSpan = progressStats.querySelector('span:last-child');
      if (lessonsSpan) lessonsSpan.textContent = `${progress.completedLessons.length}/15 lessons`;
      if (xpSpan && progress.completedLessons.length > 0) {
        xpSpan.textContent = `${progress.xp} XP`;
        xpSpan.className = '';
      }
    }
  });
}

function renderAchievements() {
  const achievementsGrid = document.querySelector('.achievements-grid');
  if (!achievementsGrid) return;

  const html = appData.achievements.map(achievement => {
    const isUnlocked = userProgress.achievementsUnlocked.includes(achievement.id);
    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <span class="achievement-icon">${achievement.icon}</span>
        <h3>${achievement.name}</h3>
        <p>${achievement.description}</p>
        <span class="achievement-xp">${achievement.xp} XP</span>
      </div>
    `;
  }).join('');

  achievementsGrid.innerHTML = html;
}

function setupSettingsListeners() {
  // Theme selection
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.value = userProgress.settings.theme;
    themeSelect.addEventListener('change', (e) => {
      userProgress.settings.theme = e.target.value;
      applySettings();
      saveProgress();
    });
  }

  // Font size
  const fontSizeSelect = document.getElementById('font-size-select');
  if (fontSizeSelect) {
    fontSizeSelect.value = userProgress.settings.fontSize;
    fontSizeSelect.addEventListener('change', (e) => {
      userProgress.settings.fontSize = parseInt(e.target.value);
      applySettings();
      saveProgress();
    });
  }

  // Checkboxes
  const autoSaveCheck = document.getElementById('auto-save');
  const showHintsCheck = document.getElementById('show-hints');
  const playgroundModeCheck = document.getElementById('playground-mode');

  if (autoSaveCheck) {
    autoSaveCheck.checked = userProgress.settings.autoSave;
    autoSaveCheck.addEventListener('change', (e) => {
      userProgress.settings.autoSave = e.target.checked;
      saveProgress();
    });
  }

  if (showHintsCheck) {
    showHintsCheck.checked = userProgress.settings.showHints;
    showHintsCheck.addEventListener('change', (e) => {
      userProgress.settings.showHints = e.target.checked;
      saveProgress();
    });
  }

  if (playgroundModeCheck) {
    playgroundModeCheck.checked = userProgress.settings.playgroundMode;
    playgroundModeCheck.addEventListener('change', (e) => {
      userProgress.settings.playgroundMode = e.target.checked;
      saveProgress();
    });
  }

  // Reset progress button
  const resetBtn = document.getElementById('reset-progress-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        if (confirm('This will delete all your progress, XP, and achievements. Continue?')) {
          resetProgress();
        }
      }
    });
  }
}

function applySettings() {
  // Apply theme
  document.documentElement.setAttribute('data-color-scheme', userProgress.settings.theme);
  
  // Apply font size
  document.documentElement.style.setProperty('--editor-font-size', `${userProgress.settings.fontSize}px`);
}

function saveProgress() {
  if (userProgress.settings.autoSave) {
    try {
      localStorage.setItem('codetrainer_progress', JSON.stringify(userProgress));
    } catch (e) {
      console.log('Could not save progress to localStorage');
    }
  }
}

function loadProgress() {
  try {
    const saved = localStorage.getItem('codetrainer_progress');
    if (saved) {
      const savedProgress = JSON.parse(saved);
      // Merge saved progress with defaults
      userProgress = { ...userProgress, ...savedProgress };
    }
  } catch (e) {
    console.log('Could not load progress from localStorage');
  }
}

function resetProgress() {
  userProgress = {
    currentLevel: 1,
    totalXP: 0,
    streak: 0,
    lessonsCompleted: 0,
    currentLanguage: null,
    languageProgress: {
      python: {currentLesson: 1, xp: 0, completedLessons: []},
      java: {currentLesson: 1, xp: 0, completedLessons: []},
      c: {currentLesson: 1, xp: 0, completedLessons: []},
      cpp: {currentLesson: 1, xp: 0, completedLessons: []}
    },
    achievementsUnlocked: [],
    settings: {
      theme: 'dark',
      fontSize: 14,
      autoSave: true,
      showHints: true,
      playgroundMode: true
    }
  };
  
  localStorage.removeItem('codetrainer_progress');
  location.reload();
}

// Global functions for button onclick handlers
window.showSection = showSection;

// Export for debugging
window.CodeTrainer = {
  appData,
  userProgress,
  showView,
  showLessonDetail,
  saveProgress,
  loadProgress
};