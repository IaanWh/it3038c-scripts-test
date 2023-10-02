import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)


attempts = 0
max_attempts = 10  # You can adjust the maximum number of attempts

# Game loop
while attempts < max_attempts:
    try:
        # Get the user's guess
        guess = int(input("Guess the number between 1 and 100: "))
        
        # Check if the guess is correct
        if guess == secret_number:
            print(f"Congratulations! You guessed the correct number, which is {secret_number}.")
            break
        elif guess < secret_number:
            print("Too low. Try again.")
        else:
            print("Too high. Try again.")
        
        attempts += 1

    except ValueError:
        print("Please enter a valid number.")

# If the user runs out of attempts
if attempts == max_attempts:
    print(f"Game Over! The correct number was {secret_number}.")
  
