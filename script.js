document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')  // 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('dashboard-body');

            // Loop through the JSON data and populate the table
            data.forEach(node => {
                const row = document.createElement('tr');

                // Insert the row with data into the table
                row.innerHTML = `
                    <td>${node.Node}</td>
                    <td>
                        <div class="core-bar">
                            <div class="alloc-bar ${getAllocClass(node.Cores_Allocated)}" style="width: ${node.Cores_Allocated}%"></div>
                        </div>
                    </td>
                    <td>${node.Memory_Used}</td>
                    <td>${node.Memory_Allocated}</td>
                    <td>${node.Memory_Total}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});

// Function to classify the allocated cores (low, medium, high usage)
function getAllocClass(percentage) {
    if (percentage > 80) {
        return 'high';
    } else if (percentage > 50) {
        return 'medium';
    } else {
        return '';
    }
}
