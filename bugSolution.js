```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [cleanupMessage, setCleanupMessage] = useState('');

  useEffect(() => {
    let cleanup = () => {
      setCleanupMessage('Component is unmounting');
      console.log('Component is unmounting');
    };
    return cleanup;
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Cleanup Message: {cleanupMessage}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCleanupMessage('')}>Reset</button>
    </div>
  );
}
```