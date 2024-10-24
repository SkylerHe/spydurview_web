# Spydurview Web Version

This guide will help you set up and view the **Spydurview** dashboard locally on your machine using Python’s built-in HTTP server.

## Prerequisites

1. **Python 3.x** installed on your machine. Most modern systems already have Python installed. You can verify by running:
   
   ```bash
   python3 --version
   ```

2. A modern web browser (e.g., Google Chrome, Firefox, Safari).

## Project Structure

Ensure the following files are located in the same directory:

```
/spydurview_web
    /dashboard.html   # Main HTML file
    /styles.css       # CSS file for styling
    /script.js        # JavaScript file for dynamic functionality
    /data.json        # JSON file containing data for the dashboard
```

## Steps to View `dashboard.html` on a Local Server

### 1. Navigate to the Project Directory

Open a terminal or command prompt, and use the `cd` command to navigate to the directory that contains your `dashboard.html`, `styles.css`, `script.js`, and `data.json` files. For example:

```bash
cd /path/to/project-directory
```

### 2. Start Python’s Simple HTTP Server

In the terminal, run the following command to start a local server on port `8000`:

```bash
python3 -m http.server 8000
```

Once the server starts, you’ll see output like:

```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

#### Pick Your Own Port Number

You can specify your own port number by changing the `8000` to any available port. For example, to use port `8080`:

```bash
python3 -m http.server 8080
```

This will serve the files at:

```
http://localhost:8080/
```

### 3. Open the Dashboard in a Web Browser

1. Copy the following link (adjust the port number if you changed it):
   
   ```
   http://localhost:8000/
   ```

   or, if you picked a custom port:

   ```
   http://localhost:[your-port-number]/
   ```

2. Paste it into the address bar of your web browser and hit **Enter**.
   
3. You should see a list of the files in your project directory. Click on `dashboard.html` to view the Spydurview web version.

### 4. Troubleshooting

- **File not found errors**: Make sure all files (HTML, CSS, JavaScript, and JSON) are in the correct directory and their names are spelled correctly.
- **Clear Cache**: If the browser isn’t loading updated files, try clearing your cache or using a different browser.
- **Port already in use**: If the port you chose is already in use, try using a different port number.

### 5. Stop the Server

Once you are done, you can stop the local server by pressing **Ctrl + C** in the terminal.