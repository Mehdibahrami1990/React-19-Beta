import { use } from 'react';
import { ThemeContext, ThemeProvider } from '../../context/ThemeContext';

function Card() {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      className={`max-w-md mx-auto my-8 rounded-lg p-6 ${
        theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
      }`}
    >
      <p className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
        When called with a Promise, the use API integrates with Suspense and
        error boundaries. The component calling use suspends while the Promise
        passed to use is pending. If the component that calls use is wrapped in
        a Suspense boundary, the fallback will be displayed. Once the Promise is
        resolved, the Suspense fallback is replaced by the rendered components
        using the data returned by the use API. If the Promise passed to use is
        rejected, the fallback of the nearest Error Boundary will be displayed.
      </p>

      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 bg-slate-600 text-white rounded-md outline-none"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
}
export default Theme;
