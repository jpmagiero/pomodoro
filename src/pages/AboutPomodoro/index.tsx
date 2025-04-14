import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{' '}
            <strong>Francesco Cirillo</strong>, which involves breaking work
            into time blocks (the famous "Pomodoros") separated by breaks. The
            goal is to stay fully focused for short periods and ensure rest to
            avoid mental fatigue.
          </p>

          <img src='https://placehold.co/1920x1080' alt='' />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to work on.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> brings something extra 🚀
          </h2>

          <p>
            Our app follows the original concept, but with a few improvements
            and customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can set your own focus time, short break, and long break! Just
            go to the <a href='/settings'>settings page</a> and adjust the
            minutes as you like.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            After each completed cycle, a new task is automatically added to
            your history, and the app suggests the next cycle (focus or break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles</strong>: Work (focus).
            </li>
            <li>
              <strong>Even cycles</strong>: Short break.
            </li>
            <li>
              <strong>Cycle 8</strong>: Special long break to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Just below the timer, you’ll see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            That way, you always know where you are in the process and what’s
            coming next. No more notes or mental math!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed and interrupted tasks and cycles are saved in the{' '}
            <a href='/history'>history</a>, so you can track your progress over
            time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Stay focused with clarity.</li>
            <li>✅ Balance work and rest properly.</li>
            <li>✅ Customize your own cycles and durations.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s go{' '}
            <a href='/'>back to the home page</a> and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
