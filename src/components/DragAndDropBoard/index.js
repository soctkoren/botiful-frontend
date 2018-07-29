import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css';
// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: 'he'
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2.2,
    margin: `0 0 ${grid}px 0`,
    borderStyle: 'solid',
    borderColor: '#65B9B3',
    color: 'white',
    // change background colour if dragging
    background: isDragging ? '#FFC0DA' : '#65B9B3',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'white',
    padding: grid,
    width: 350,
});

class DragAndDropBoard extends Component {
    constructor(props) {
      super(props)
    }

    state = {
        items: [
          { id: `bookAppointment`,
            content: 'Book Appointment',
            type: 'consumer'
          },
          { id: 'askForPricing',
            content: 'Ask For Pricing',
            type: 'consumer'
          },
          { id: 'leaveAReview',
            content: 'Leave A Review',
            type: 'consumer'
          },
          { id: 'checkAppointmentStatus',
            content: 'Check Appointment Status',
            type: 'owner'
          },
          { id: 'callCustomer',
            content: 'Call Customer',
            type: 'owner'
          },
          { id: 'textCustomer',
            content: 'Text Customer',
            type: 'owner'
          }
        ],
        selected: [
          { id: 'address',
            content: 'What is the Business Address',
            type: 'consumer'
          }
        ]
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="boardsContainer">
                <div className="line"></div>
                <div className="boardsSubHeader">
                  <div className="left">
                    Skill Templates
                  </div>
                  <div className="right">
                    <span className="right-item">Selected Skills</span>
                  </div>
                </div>
                <div className="boards">
                  <div className="left">
                    <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}>
                          {this.state.items.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}>
                                  {item.content}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                  <div className="right">
                    <Droppable droppableId="droppable2">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}>
                          {this.state.selected.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  )}>
                                  {item.content}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              </div>
            </DragDropContext>
            <div className="saveBtn">
              <button onClick={() => {this.props.action(this.state.selected)}}>Create Alexa App</button>
            </div>
          </div>
        );
    }
}

export default DragAndDropBoard;
