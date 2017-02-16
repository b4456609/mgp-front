import React from 'react';
import {
  Panel,
} from 'react-bootstrap';
import Highlight from 'react-highlight'
import './FeatureFiles.css'

const FeatureFiles = ({data}) => {
  return (
    <div>
      {
        data.map((item) => {
          return (
            <Panel collapsible defaultExpanded header={item.name} className="feature-panel">
              <Highlight className='gherkin'>
                {item.content}
              </Highlight>
            </Panel>
          )
        })
      }
    </div>
  );
};

export default FeatureFiles;
