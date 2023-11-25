import React, {useState} from "react";
import { process, State} from "@progress/kendo-data-query";

import {
  Grid,
  GridColumn, GridDataStateChangeEvent,
} from "@progress/kendo-react-grid";
import {UseMovies} from "../api/movies.api";
import GridSkeleton from "../../../components/skeleton/GridSkeleton";
import Card from "../../../components/Card";

const MoviesGrid = () => {
  const {data: movies, isLoading} = UseMovies();
  const [dataState, setDataState] = useState<State>({
    skip: 0,
    take: 20,
    sort: [{field: "title", dir: "asc"}]
  });

  const handleGridDataStateChange = (e: GridDataStateChangeEvent) => {
    setDataState(e.dataState)
  };

  if (isLoading) return <GridSkeleton/>;

  if (!movies) return null;


  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ marginTop: '20px' }}>Movie List and Filter</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
        <div className="flex flex-col gap-2">
          <Card>


        <Grid
          size={"small"}
          filterable={true}
          pageable={{buttonCount: 4}}

          data={process(movies, dataState)}
          {...dataState}
          onDataStateChange={handleGridDataStateChange}
        >
          <GridColumn
            field="id"
            title="Code"
            width={"125"}
            editable={false}
          />
          <GridColumn
            field="title"
            title="Movie name"
            width={"300"}
            editable={false}
            filterable={true}
          />
          <GridColumn
            field="description"
            title="Description"
            width={"300"}
            filterable={true}
            editable={false}
          />
          <GridColumn
            field="releasedYear"
            title="Released Year"
            width={"300"}
            filterable={false}
            editable={false}
          />
          <GridColumn
            field="category.name"
            title="Category Name"
            width={"300"}
            filterable={false}
            editable={false}
          />
          <GridColumn
            field="language.name"
            title="Language Name"
            width={"300"}
            filterable={false}
            editable={false}
          />

        </Grid>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MoviesGrid;