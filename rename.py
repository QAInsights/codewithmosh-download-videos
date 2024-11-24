"""
File: rename.py
Author: NaveenKumar Namachivayam
Description: This script renames .mp4 files in a folder in ascending order based on their modified date.
License: MIT
Date: 11-24-2024
Version: 1.0

Disclaimer: Use this script at your own risk. The author is not responsible for any damage or data loss.
Instructions: Update the 'folder_path' variable with the path to your folder containing .mp4 files.
Run the script to rename the files in ascending order based on their modified date.
"""

import os

def get_mp4_files_with_dates(folder_path):
    """
    Get a list of .mp4 files with their modified dates from the specified folder.

    Args:
        folder_path (str): The path to the folder containing .mp4 files.

    Returns:
        list: A list of tuples, each containing the file name and its modified date.
    """
    files_with_dates = []
    try:
        for file_name in os.listdir(folder_path):
            if file_name.endswith('.mp4'):
                full_path = os.path.join(folder_path, file_name)
                modified_time = os.path.getmtime(full_path)
                files_with_dates.append((file_name, modified_time))
    except FileNotFoundError:
        print(f"Error: The folder '{folder_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")
    return files_with_dates

def rename_files_in_ascending_order(folder_path):
    """
    Rename .mp4 files in the specified folder in ascending order based on their modified date.

    Args:
        folder_path (str): The path to the folder containing .mp4 files.
    """
    files_with_dates = get_mp4_files_with_dates(folder_path)
    sorted_files = sorted(files_with_dates, key=lambda x: x[1])

    for index, (file_name, _) in enumerate(sorted_files, start=1):
        new_name = f"{index:03d}_{file_name}"
        try:
            print("Renaming", file_name, "to", new_name)
            os.rename(os.path.join(folder_path, file_name), os.path.join(folder_path, new_name))
        except FileNotFoundError:
            print(f"Error: The file '{file_name}' was not found.")
        except Exception as e:
            print(f"An error occurred while renaming '{file_name}': {e}")

def main():
    """
    Main function to process folders and rename .mp4 files in each folder.
    """
    folder_path = r'C:\Users\Path\To\Folder'
    try:
        # Loop through all the folders in the path
        for folder in os.listdir(folder_path):
            # Check if the folder is a directory
            print("Processing folder: ", folder)
            if os.path.isdir(os.path.join(folder_path, folder)):
                # Check if the folder contains mp4 files
                if any(file.endswith('.mp4') for file in os.listdir(os.path.join(folder_path, folder))):
                    rename_files_in_ascending_order(os.path.join(folder_path, folder))
    except FileNotFoundError:
        print(f"Error: The folder '{folder_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

def show_support_message():
    """
    Show a message with a link to buy me a coffee.
    """
    print("*" * 64)
    print("Buy me a coffee: https://www.buymeacoffee.com/qainsights")
    print("*" * 64)

if __name__ == '__main__':
    main()
    show_support_message()