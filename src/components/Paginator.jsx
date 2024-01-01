import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const Paginator = ({page, changePage}) => {

    const handleOnClickPrevious = () => {
        console.log("previous", parseInt(page - 1));
    }

    const handleOnClickNext = () => {
        console.log("next", parseInt(page + 1));
    }

    return (
        <Pagination
            size="lg"
        >
            <PaginationItem onClick={handleOnClickPrevious}>
                <PaginationLink
                    href="#"
                    previous
                >
                Previous
                </PaginationLink>
            </PaginationItem>
            <PaginationItem onClick={handleOnClickNext}>
                <PaginationLink
                href="#"
                next
                >
                Next
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}

export default Paginator