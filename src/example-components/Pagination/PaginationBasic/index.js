import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class LivePreviewExample extends Component {
  render() {
    return (
      <Fragment>
        <Pagination>
          <PaginationItem disabled>
            <PaginationLink first href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink previous href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        <div className="divider my-4" />
        <Pagination className="mb-4">
          <PaginationItem disabled>
            <PaginationLink first href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink previous href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        <div className="divider my-4" />
        <Pagination className="pagination-icons">
          <PaginationItem disabled>
            <PaginationLink first href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink previous href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={e => e.preventDefault()}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" onClick={e => e.preventDefault()}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Fragment>
    );
  }
}
