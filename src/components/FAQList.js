import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FAQList() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get('https://sandbox.practical.me/api/faq')
      .then(response => {
        if (response.data.isSuccess) {
          setFaqs(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <div key={faq.id}>
          <h3>{faq.question}</h3>
          <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
        </div>
      ))}
    </div>
  );
}

export default FAQList;
