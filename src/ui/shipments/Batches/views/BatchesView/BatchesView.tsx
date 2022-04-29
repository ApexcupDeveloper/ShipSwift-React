import { PageControl, PerPage, PlacementCard } from '../../../../@core/modules/ListBuilder';
import { TooltipsList } from '../../../../@core/modules/Tooltip';
import { BatchShipmentList } from '../../components/BatchShipmentList';
import { getCompanyId } from '../../../../../utils';
import { useCourierClient } from '../../../../../client/client-hook';
import { BatchCountReq, BatchInfo, ListBatchesReq } from '../../../../../proto/courierapi_pb';
import { useAuth0 } from '../../../../../business/auth/hooks';
import { useEffect, useState } from 'react';
import { addErrorToast } from '../../../../toast';
import { useSelectPage } from '../../../../@core/modules/ListBuilder/hooks';
import { usePerPage } from '../../../../@core/modules/ListBuilder/hooks/usePerPage';
import { ProductsCountRequest } from '../../../../../proto/product_manager_pb';

type Props = {};

export const BatchesView: React.VFC<Props> = () => {
  const { user } = useAuth0();
  const companyId = getCompanyId(user);
  const getClient = useCourierClient();

  const [loaded, setLoaded] = useState(false);
  const [stepButtonValue, setStepButtonValue] = useState('');
  const { selectedRowsCount, setRowsCount } = usePerPage();
  const [selectedRows, setSelectedRows] = useState(10);
  const [handleChanged, setHandleChanged] = useState(false);
  const { setPageCount, currentPage, pageCount, canPrev, canNext, next, prev, setCurrentPage } = useSelectPage();
  const [listBatches, setListBatches] = useState<BatchInfo.AsObject[]>([]);
  const [nextStepButtonValue, setNextStepButtonValue] = useState('');

  useEffect(() => {
    localStorage.setItem('batch_shipment_pagination', JSON.stringify([""]));
    setStepButtonValue('');
    // setNextStepButtonValue('')
    if (pageCount) {
      setCurrentPage(1);
    } else {
      setCurrentPage(0);
    }

  }, [pageCount]);

  useEffect(() => {
    localStorage.setItem('batch_shipment_row', selectedRowsCount.value.toString());
    setSelectedRows(selectedRowsCount.value);
  }, [selectedRowsCount]);

  useEffect(() => {
    const rows = localStorage.getItem('batch_shipment_row');
    if (rows) {
      setRowsCount({ label: rows, value: Number(rows) })
    }
  }, [])

  useEffect(() => {
    if (companyId) {
      getListBatches()
        .then((data: any) => {
          console.log(data);
          const batches = data[0].batchesList;
          setListBatches(batches);
          const nextValue = data[0].nextPageCursor;
          setNextStepButtonValue(nextValue);
          setPageCount(Math.ceil(data[1].count / selectedRows));
          setLoaded(true);
        })
        .catch((err) => {
          console.error('Error: ', err);
          setLoaded(true);
          addErrorToast(err.message);
        })
    }
  }, [companyId, currentPage, selectedRows, handleChanged])

  const getListBatches = () => {
    return new Promise<any>((resolve, reject) => {
      getClient()
        .then((client) => {
          const requestListBatches: ListBatchesReq.AsObject = {
            companyId: companyId,
            paginationCursor: stepButtonValue,
            pageSize: selectedRows,
          };

          const requestBatchCount: BatchCountReq.AsObject = {
            companyId: companyId,
          };

          Promise.all([
            client.listBatches(requestListBatches),
            client.batchCount(requestBatchCount),
          ]).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          });
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  const onNext = () => {
    if (loaded) {
      setLoaded(false);
      next();
      const paginationHistoryString = localStorage.getItem('batch_shipment_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      localStorage.setItem('batch_shipment_pagination', JSON.stringify([...paginationHistory, nextStepButtonValue]));
      setStepButtonValue(nextStepButtonValue);
    }
  };

  const onPrev = () => {
    if (loaded) {
      setLoaded(false);
      prev();
      const paginationHistoryString = localStorage.getItem('batch_shipment_pagination');
      const paginationHistory: string[] = JSON.parse(paginationHistoryString ? paginationHistoryString : `[""]`);
      const prevValue = paginationHistory[currentPage - 2];
      const newHistory = paginationHistory.filter((item) => item !== paginationHistory[currentPage - 1]);
      localStorage.setItem('batch_shipment_pagination', JSON.stringify(newHistory));
      setStepButtonValue(prevValue);
    }
  }

  return (
    <PlacementCard>
{/*      <PlacementCard.Header>
        <styled.HeaderWrapper>
          <InputSearch />
        </styled.HeaderWrapper>
      </PlacementCard.Header>*/}
      <PlacementCard.Content>
        <TooltipsList>
          <BatchShipmentList handleChangeEvent={() => setHandleChanged(!handleChanged)} batchShipments={listBatches}/>
        </TooltipsList>
      </PlacementCard.Content>
      <PlacementCard.Footer>
        <PageControl showEntries onNext={onNext} onPrev={onPrev} />
        <PerPage />
      </PlacementCard.Footer>
    </PlacementCard>
  );
};
