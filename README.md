# Sentiment Analysis Frontend: User-Friendly Journal Tracker

## **Project Overview**
This project focuses on a simple **Sentiment Analysis Journal Tracker** that enables users to record daily experiences and receive structured feedback on their sentiment, keywords, and a suitable title for their entry. The app analyzes the user's input and categorizes their day as "Great," "Good," or "Bad" while highlighting key moments.

---

## **Frontend Stack**
- **Svelte 5**: Chosen for its modern, lightweight framework capabilities and reactive UI development.
- **CSS**: For responsive and clean styling.

---

## **Features**

1. **User Input Section**:
    - A text box where users can summarize their day.
    - A button to submit their journal entry.

2. **AI-Driven Feedback**:
    - The input is sent to a backend model that analyzes the sentiment and provides structured feedback in JSON format.

3. **Journal Entry Display**:
    - Displays analyzed entries in a card format, including:
        - **Title**: A concise title summarizing the user's day.
        - **Sentiment**: Categorized as "Great," "Good," or "Bad."
        - **Tags**: Keywords extracted from the user's text.

4. **Dynamic Styling**:
    - Sentiment-based color coding:
        - "Great" - Green
        - "Good" - Yellow
        - "Bad" - Red

---

## **How It Works**

### **1. Input Submission**:
- The user types their experience in a text box (e.g., "Missed the bus, spilled coffee, and argued with my boss.").
- Clicks on the "Add Journal" button.

### **2. API Integration**:
- The frontend sends the user’s input to the backend for sentiment analysis.
- Receives a JSON response structured as:
  ```json
  {
    "status": "success",
    "message": {
      "sentiment": "Bad",
      "title": "Awful Day",
      "tags": [
        "missed bus",
        "spilled coffee",
        "argument with boss"
      ]
    }
  }
  ```

### **3. Data Display**:
- The response is rendered as a styled card on the frontend, showing the title, sentiment, and tags.

---

## **Example Usage**

### **Input**:
"Nothing went right today. I missed the bus, spilled coffee on my shirt, and got into an argument with my boss. Just awful."

### **Output on Card**:
- **Title**: Awful Day
- **Sentiment**: Bad
- **Tags**: Missed bus, spilled coffee, argument with boss

### **Styling**:
- Card background: Light red
- Sentiment badge: Red

---

## **Challenges Faced**
1. **Real-Time Feedback Rendering**:
    - Ensuring smooth rendering of journal cards without page reload.
2. **Handling Edge Cases**:
    - Managing overly long or vague user inputs to generate meaningful feedback.
3. **Styling Consistency**:
    - Maintaining responsive design across various devices.

---

## **Future Enhancements**
1. **User Authentication**:
    - Allow users to save their journals and revisit them later.
2. **Sentiment Graphs**:
    - Provide visual insights into user sentiment trends over time.
3. **Multi-Language Support**:
    - Enable sentiment analysis for non-English journal entries.

---

## **Conclusion**
This frontend application demonstrates the power of integrating sentiment analysis with user-friendly design. It allows users to reflect on their day while providing structured, AI-driven insights. Future iterations aim to enhance usability and analytics capabilities for a more engaging experience.

