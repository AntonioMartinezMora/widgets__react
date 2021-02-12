import React, {useState} from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite  JS library'
    },
    {
        title: 'How do you use React',
        content: 'React is used by creating components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
]


export default () => {
    const [selected, setSelected] = useState(options[0])

    return <div>
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown 
                label="Select color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
        </div>
    
};
  