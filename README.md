# Google Passwords Entry Inserter

Easily add arbitrary login and password pairs to Google Passwords. It works in Linux and Windows, but I only have instructions for Linux operation for now. Since this concerns Google Passwords, I suppose it only works with Google Chrome.

1. Edit `/etc/hosts` as root.
2. Add a line like this: `127.0.0.1	entry_name_on_google_passwords`.
   1. That whitespace is a tab.
   2. This name is used as an identifier on Google Passwords.
   4. Replace this name by something related to the login you want to save.
   3. This name must be a valid URL.
3. Run the project with `npm start`.
4. In the browser, go to `entry_name_on_google_passwords:3000`.
5. Enter the login you want to save on the first field.
6. Enter the password you want to save on the second field.
7. Click *Login*.
8. If nothing happens, click on the key icon on the omnibar and click *Save*.
