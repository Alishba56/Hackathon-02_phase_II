# Task Management Skill

A skill for managing tasks through the API endpoints.

## Commands

### create-task

Create a new task.

**Usage:** `/create-task <title> [description]`

**Parameters:**
- `title` (required): The task title
- `description` (optional): The task description

**API Endpoint:** `POST /api/tasks`

**Example:**
```
/create-task "Implement login feature" "Add JWT authentication to the login endpoint"
```

---

### list-tasks

List all tasks with optional filtering and sorting.

**Usage:** `/list-tasks [status] [sort]`

**Parameters:**
- `status` (optional): Filter by status (e.g., "pending", "completed")
- `sort` (optional): Sort order (e.g., "created_at", "title")

**API Endpoint:** `GET /api/tasks`

**Example:**
```
/list-tasks pending created_at
/list-tasks
```

---

### get-task

Get details of a specific task by ID.

**Usage:** `/get-task <id>`

**Parameters:**
- `id` (required): The task ID

**API Endpoint:** `GET /api/tasks/{id}`

**Example:**
```
/get-task 42
```

---

### update-task

Update an existing task.

**Usage:** `/update-task <id> <updates>`

**Parameters:**
- `id` (required): The task ID
- `updates` (required): JSON object with fields to update

**API Endpoint:** `PUT /api/tasks/{id}`

**Example:**
```
/update-task 42 {"title": "Updated title", "description": "New description"}
```

---

### delete-task

Delete a task by ID.

**Usage:** `/delete-task <id>`

**Parameters:**
- `id` (required): The task ID

**API Endpoint:** `DELETE /api/tasks/{id}`

**Example:**
```
/delete-task 42
```

---

### toggle-complete

Toggle the completion status of a task.

**Usage:** `/toggle-complete <id>`

**Parameters:**
- `id` (required): The task ID

**API Endpoint:** `PATCH /api/tasks/{id}/complete`

**Example:**
```
/toggle-complete 42
```

## Implementation Notes

When invoked, these commands should:
1. Parse the provided arguments
2. Make the appropriate HTTP request to the API endpoint
3. Handle responses and errors appropriately
4. Display results to the user in a clear format

## Error Handling

- Validate required parameters before making API calls
- Handle HTTP errors (4xx, 5xx) gracefully
- Provide clear error messages to users
- Handle network failures and timeouts
