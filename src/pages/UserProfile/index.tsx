import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaList, FaGift, FaUserEdit } from 'react-icons/fa';
import { Breadcrumb, Spinner, TabSet } from '../../components';
import { RootStore } from '../../redux/store';
import EditProfile from './editProfile';
import MyOrders from './myOrders';
import { defaultBrand } from '../../constants';
import WishList from './wishList';
import useReadUserOrders from '../../hooks/useReadUserOrders';
import useReadUserWishes from '../../hooks/useReadUserWishes';
import {
    Container,
    StyledTabTitle,
    TabTitleContainer,
    SpinnerContainer,
} from './styles';

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

    const { isLoading: loadingOrders, data: valueOrders } = useReadUserOrders(
        `user/orders/${uid}`
    );
    const orders = valueOrders?.orders;

    const { isLoading: loadingWhishes, data: valueWhishes } = useReadUserWishes(
        `user/wish/${uid}`
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
            {...(authReducer as object)}
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
                    defaultColor={defaultBrand}
                    text={
                        <h1
                            style={{
                                color:
                                    plantillaStyles?.colorFondo || defaultBrand,
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
