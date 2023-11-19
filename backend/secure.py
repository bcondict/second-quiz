import hashlib

# Assuming this is the stored hashed password in your database
stored_hashed_password = "your_stored_hashed_password"

# User's entered password during login
user_entered_password = "password_to_check"

# Hash the entered password using the same method
hash_object = hashlib.sha256()
hash_object.update(user_entered_password.encode())
hashed_password_to_check = hash_object.hexdigest()

# Compare the newly hashed password with the stored hash
if stored_hashed_password == hashed_password_to_check:
    print("Password is correct! Allow login.")
else:
    print("Incorrect password. Deny login.")
