import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaList, FaGift, FaUserEdit, FaStar } from 'react-icons/fa';
import { Breadcrumb } from '../../components';
import TabSet from '../../components/TabSet';
import { RootStore } from '../../redux/store';
import {
    Container,
    StyledTabTitle,
    TabTitleContainer,
    StyledTabLink,
    SpinnerContainer,
} from './styles';
import EditProfile from './editProfile';
import MyOrders from './myOrders';
import { baseUrl } from '../../constants';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../components/Spinner';

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
    <TabTitleContainer>
        <FaStar />
        <StyledTabLink to="/offers">
            <StyledTabTitle>See offers</StyledTabTitle>
        </StyledTabLink>
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

    const handleTabSelect = (index: number) => {
        setTabIndex(index);
    };

    const tabPanels = [
        <MyOrders orders={orders} />,
        <h2>Any content 2</h2>,
        <EditProfile
            {...authReducer}
            colorfondo={plantillaStyles?.colorFondo}
            colortexto={plantillaStyles?.colorTexto}
        />,
        <h2>Any content 4</h2>,
    ];

    if (loadingOrders) {
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
