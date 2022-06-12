import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaList, FaGift, FaUserEdit } from 'react-icons/fa';
import { Breadcrumb } from '../../components';
import TabSet from '../../components/TabSet';
import { RootStore } from '../../redux/store';
import {
    Container,
    StyledTabTitle,
    TabTitleContainer,
    SpinnerContainer,
} from './styles';
import EditProfile from './editProfile';
import MyOrders from './myOrders';
import { baseUrl } from '../../constants';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../components/Spinner';
import WishList from './wishList';

const tabTitles = [
    <TabTitleContainer>
        <FaList />
        <StyledTabTitle>My orders</StyledTabTitle>
    </TabTitleContainer>,
    <TabTitleContainer>
        <FaGift />
        <StyledTabTitle>My wish list</StyledTabTitle>
    </TabTitleContainer>,
    <TabTitleContainer>
        <FaUserEdit />
        <StyledTabTitle>Edit profile</StyledTabTitle>
    </TabTitleContainer>,
];

const UserProfile = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { plantillaReducer, authReducer } = useSelector(
        (state: RootStore) => state
    );
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const { uid } = authReducer;

    const { loading: loadingOrders, value: valueOrders } = useFetch(
        `${baseUrl}/user/orders/${uid}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('token'),
            },
        }
    );
    const orders = valueOrders?.orders;

    const { loading: loadingWhishes, value: valueWhishes } = useFetch(
        `${baseUrl}/user/wish/${uid}`
    );

    const wishes = valueWhishes?.deseos;

    const handleTabSelect = (index: number) => {
        setTabIndex(index);
    };

    const tabPanels = [
        <MyOrders
            orders={orders}
            colorfondo={plantillaStyles?.colorFondo}
            colortexto={plantillaStyles?.colorTexto}
        />,
        <WishList wishes={wishes} />,
        <EditProfile
            {...authReducer}
            colorfondo={plantillaStyles?.colorFondo}
            colortexto={plantillaStyles?.colorTexto}
        />,
    ];

    if (loadingOrders || loadingWhishes) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={
                        <h1
                            style={{
                                color: plantillaStyles?.colorFondo || '#47bac1',
                            }}
                        >
                            Loading...
                        </h1>
                    }
                />
            </SpinnerContainer>
        );
    }

    return (
        <Container>
            <div className="container-fluid">
                <div className="container">
                    <Breadcrumb />
                    <TabSet
                        titles={tabTitles}
                        panels={tabPanels}
                        tabIndex={tabIndex}
                        onSelect={handleTabSelect}
                        color={plantillaStyles?.colorFondo}
                    />
                </div>
            </div>
        </Container>
    );
};

export default UserProfile;
