export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={8} cols={50}>
        The assignment is available online Submit a link to the landing page of your web application running on Netlify.
        The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link
        to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="NOTES">NOTES</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="NUMBER">Number</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In-person</option>
            </select>
          </td>
        </tr><br />
        <tr>
          <td />
          <td valign="top">
            <label htmlFor="wd-entry-options">Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <input type="checkbox" name="check-submission" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />

            <input type="checkbox" name="check-submission" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />

            <input type="checkbox" name="check-submission" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

            <input type="checkbox" name="check-submission" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotations</label><br />

            <input type="checkbox" name="check-submission" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td />
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <input id="wd-assign-to" value={'Everyone'} /><br /><br />
          </td>
        </tr>
        <tr>
          <td />
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <input type="date"
              id="wd-due-date"
              value="2024-05-13" /><br /><br />
          </td>
        </tr>
        <tr>
          <td />
          <td valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <input type="date"
              id="wd-available-from"
              value="2024-05-06" />
          </td>
          <td align="left" valign="top">
            <input type="date"
              id="wd-available-until"
              value="2024-05-28" />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button id="wd-cancel" onClick={() => alert("Cancelled!")} type="button">
          Cancel
        </button>
        <button id="wd-save" onClick={() => alert("Saved!")} type="button">
          Save
        </button>
      </div>
    </div>
  );
}
